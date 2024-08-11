import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { ProgramaInstitucion } from "../entity/ProgramaInstitucion";

export class ProgramaInstitucionController {
  static readonly getAllProgramaInstitucions = async (
    req: Request,
    res: Response
  ) => {
    const repository = AppDataSource.getRepository(ProgramaInstitucion);

    try {
      const data = await repository.find({
        relations: {
          program: true,
          institution: true,
        },
      });

      res.json(
        data.map(
          ({ program: programa, institution: institucion, ...rest }) => ({
            ...rest,
            program: {
              id: programa.id,
              name: programa.name,
              faculty_id: programa.facultadId,
            },
            institution: {
              id: institucion.id,
              name: institucion.name,
              contact_id: institucion.contact_id,
              city_id: institucion.city_id,
            },
          })
        )
      );
    } catch (error) {
      res.status(404).json({
        message: "Sin resultados",
      });
    }
  };

  static readonly getProgramInstitution = async (
    req: Request,
    res: Response
  ) => {
    const repository = AppDataSource.getRepository(ProgramaInstitucion);

    try {
      const { id } = req.params;
      const {
        program: programa,
        institution: institucion,
        ...rest
      } = await repository.findOne({
        where: { id: Number(id) },
        relations: {
          program: true,
          institution: true,
          programInstitutionAgreements: true,
        },
      });

      res.json({
        ...rest,
        program: {
          id: programa.id,
          name: programa.name,
          faculty_id: programa.facultadId,
        },
        institution: {
          id: institucion.id,
          name: institucion.name,
          contact_id: institucion.contact_id,
          city_id: institucion.city_id,
        },
      });
    } catch (error) {
      res.status(404).json({
        message: "Sin resultados",
      });
    }
  };

  static readonly getAllProgramaByInstitucion = async (
    req: Request,
    res: Response
  ) => {
    const { id } = req.params;
    const repository = AppDataSource.getRepository(ProgramaInstitucion);

    try {
      const items = await repository.find({
        relations: {
          institution: true,
          program: true,
        },
        where: { instititution_id: Number(id) },
      });

      const groupedByInstitucion = items.reduce((acc, item) => {
        // Asegúrate de que la institución existe en el acumulador
        if (!acc[item.institution.id]) {
          acc[item.institution.id] = {
            institution: item.institution,
            programs: [],
          };
        }

        // Añadir el programa a la institución correcta
        acc[item.institution.id].programs.push({
          ...item.program,
          faculty_id: item.program.facultadId,
          id_intermediate: item.id,
        });

        return acc;
      }, {} as Record<number, { institution: any; programs: any[] }>);

      // Convertir el resultado a un array si lo prefieres
      const groupedArray = Object.values(groupedByInstitucion);

      res.send(groupedArray[0]);
    } catch (error) {
      res.status(404).json({
        message: "Sin resultados",
        error,
      });
    }
  };

  static readonly addInstitutionProgram = async (
    req: Request,
    res: Response
  ) => {
    const { program_id, institution_id } = req.body;

    const items = program_id.map((program) => ({
      programa_id: program,
      institucion_id: institution_id,
    }));

    const repository = AppDataSource.getRepository(ProgramaInstitucion);

    try {
      await AppDataSource.transaction(async (transactionalEntityManager) => {
        for await (const iterator of items) {
          const newInstitucion = repository.create({
            instititution_id: iterator.institucion_id,
            program_id: iterator.programa_id,
          });
          await transactionalEntityManager.save(newInstitucion);
        }
      });

      res
        .status(201)
        .json({ message: "Program institution created successfully" });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ error: "Error al insertar programa institucion" });
    }
  };

  static readonly updateInstitutionProgram = async (
    req: Request,
    res: Response
  ) => {
    const { program_id, institution_id } = req.body;

    const repository = AppDataSource.getRepository(ProgramaInstitucion);

    try {
      const institution = await repository.findOneBy({
        instititution_id: Number(institution_id),
      });

      if (!institution) {
        return res.status(404).json({ error: "Institution not found" });
      }

      const newProgramIds = program_id.map((program) => Number(program));
      const newInstitutionId = institution_id;

      const existingAssociations = await repository.find({
        where: { instititution_id: Number(newInstitutionId) },
      });

      // const currentProgramIds = existingAssociations.map(
      //   (assoc) => assoc.program_id
      // );
      // const idsToRemove = currentProgramIds.filter(
      //   (id) => !newProgramIds.includes(id)
      // );

      await AppDataSource.transaction(async (transactionalEntityManager) => {
        const existingAssociationsIds = existingAssociations.map(
          (assoc) => assoc.program_id
        );
        console.log("existingAssociationsIds", existingAssociationsIds);

        const prev = newProgramIds.filter((el) =>
          existingAssociationsIds.includes(el)
        );
        console.log("prev", prev);

        const areNew = newProgramIds.filter(
          (el) => !existingAssociationsIds.includes(el)
        );

        const toDelete = existingAssociationsIds.filter(
          (el) => !prev.includes(el)
        );
        console.log("toDelete", toDelete);

        if (toDelete.length > 0) {
          const r = await transactionalEntityManager.delete(
            ProgramaInstitucion,
            existingAssociations
              .filter((item) => toDelete.includes(item.program_id))
              .map((item) => item.id)
          );
          console.log("r", r);
        }

        await transactionalEntityManager.save(
          areNew
            .map((item) => ({
              program_id: item,
              instititution_id: newInstitutionId,
            }))
            .map((data) => repository.create(data))
        );

        // if (idsToRemove.length > 0) {
        //   await repository.delete({
        //     program_id: In(idsToRemove),
        //     instititution_id: newInstitutionId,
        //   });
        //   await transactionalEntityManager.delete(
        //     ProgramaInstitucion,
        //     idsToRemove
        //   );
        // }

        // for (const programId of newProgramIds) {
        //   const existingAssociation = existingAssociations.find(
        //     (assoc) => assoc.program_id === programId
        //   );

        //   if (existingAssociation) {
        //     // Actualiza la asociación existente
        //     existingAssociation.program_id = programId;
        //     await transactionalEntityManager.save(existingAssociation);
        //   } else {
        //     // Crea una nueva asociación
        //     const newAssociation = repository.create({
        //       instititution_id: newInstitutionId,
        //       program_id: programId,
        //     });
        //     await transactionalEntityManager.save(newAssociation);
        //   }
        // }

        // const response = await transactionalEntityManager.save(newConvenio);

        // const programaInstitucionConvenios = [
        //   ...programman.map((program_id: number) => ({
        //     convenio_id: response.id,
        //     programa_institucion_id: Number(program_id),
        //   })),
        //   ...ufps_programman.map((program_id: number) => ({
        //     convenio_id: response.id,
        //     programa_institucion_id: Number(program_id),
        //   })),
        // ].map((data) => programaInstitucionConvenioRepository.create(data));

        // await transactionalEntityManager.save(programaInstitucionConvenios);
      });
      // const institution = await repository.findOneBy({ id: parseInt(id, 10) });

      // if (!institution) {
      //   return res.status(404).json({ error: "Program institution not found" });
      // }

      // institution.institucion_id = institution_id;
      // institution.programa_id = program_id[0];

      // await repository.save(institution);

      res
        .status(200)
        .json({ message: "Program institution updated successfully" });
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Error updating program institution" });
    }
  };

  static readonly getProgramsGroupedByInstitution = async (
    req: Request,
    res: Response
  ) => {
    const repository = AppDataSource.getRepository(ProgramaInstitucion);

    try {
      const items = await repository.find({
        relations: {
          institution: true,
          program: true,
        },
      });

      const groupedByInstitucion = items.reduce((acc, item) => {
        // Asegúrate de que la institución existe en el acumulador
        if (!acc[item.institution.id]) {
          acc[item.institution.id] = {
            institution: item.institution,
            programs: [],
          };
        }

        const { facultadId, ...rest } = item.program;

        // Añadir el programa a la institución correcta
        acc[item.institution.id].programs.push({
          ...rest,
          faculty_id: facultadId,
        });

        return acc;
      }, {} as Record<number, { institution: any; programs: any[] }>);

      // Convertir el resultado a un array si lo prefieres
      const groupedArray = Object.values(groupedByInstitucion);

      res.send(groupedArray);
    } catch (error) {
      res.status(404).json({
        message: "Sin resultados",
        error,
      });
    }
  };

  static readonly getProgramGroupedByInstitution = async (
    req: Request,
    res: Response
  ) => {
    const { id } = req.params;
    const repository = AppDataSource.getRepository(ProgramaInstitucion);

    try {
      const items = await repository.find({
        relations: {
          institution: true,
          program: true,
        },
        where: { instititution_id: Number(id) },
      });

      const groupedByInstitucion = items.reduce((acc, item) => {
        // Asegúrate de que la institución existe en el acumulador
        if (!acc[item.institution.id]) {
          acc[item.institution.id] = {
            institution: item.institution,
            programs: [],
          };
        }

        const { facultadId, ...rest } = item.program;

        // Añadir el programa a la institución correcta
        acc[item.institution.id].programs.push({
          ...rest,
          faculty_id: facultadId,
        });

        return acc;
      }, {} as Record<number, { institution: any; programs: any[] }>);

      // Convertir el resultado a un array si lo prefieres
      const groupedArray = Object.values(groupedByInstitucion)[0];

      res.send(groupedArray);
    } catch (error) {
      res.status(404).json({
        message: "Sin resultados",
        error,
      });
    }
  };
}
