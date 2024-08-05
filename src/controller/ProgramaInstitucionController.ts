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
          programa: true,
          institucion: true,
        },
      });

      res.json(
        data.map(({ programa, institucion, ...rest }) => ({
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
        }))
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
      const { programa, institucion, ...rest } = await repository.findOne({
        where: { id: Number(id) },
        relations: {
          programa: true,
          institucion: true,
          programaInstitucionConvenios: true,
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
          institucion: true,
          programa: true,
        },
        where: { institucion_id: Number(id) },
      });

      const groupedByInstitucion = items.reduce((acc, item) => {
        // Asegúrate de que la institución existe en el acumulador
        if (!acc[item.institucion.id]) {
          acc[item.institucion.id] = {
            institucion: item.institucion,
            programas: [],
          };
        }

        // Añadir el programa a la institución correcta
        acc[item.institucion.id].programas.push(item.programa);

        return acc;
      }, {} as Record<number, { institucion: any; programas: any[] }>);

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
            institucion_id: iterator.institucion_id,
            programa_id: iterator.programa_id,
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
    const { id } = req.params;
    const { program_id, institution_id } = req.body;

    const repository = AppDataSource.getRepository(ProgramaInstitucion);

    try {
      const institution = await repository.findOneBy({ id: parseInt(id, 10) });

      if (!institution) {
        return res.status(404).json({ error: "Program institution not found" });
      }

      institution.institucion_id = institution_id;
      institution.programa_id = program_id[0];

      await repository.save(institution);

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
          institucion: true,
          programa: true,
        },
      });

      const groupedByInstitucion = items.reduce((acc, item) => {
        // Asegúrate de que la institución existe en el acumulador
        if (!acc[item.institucion.id]) {
          acc[item.institucion.id] = {
            institucion: item.institucion,
            programas: [],
          };
        }

        // Añadir el programa a la institución correcta
        acc[item.institucion.id].programas.push(item.programa);

        return acc;
      }, {} as Record<number, { institucion: any; programas: any[] }>);

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
          institucion: true,
          programa: true,
        },
        where: { institucion_id: Number(id) },
      });

      const groupedByInstitucion = items.reduce((acc, item) => {
        // Asegúrate de que la institución existe en el acumulador
        if (!acc[item.institucion.id]) {
          acc[item.institucion.id] = {
            institucion: item.institucion,
            programas: [],
          };
        }

        // Añadir el programa a la institución correcta
        acc[item.institucion.id].programas.push(item.programa);

        return acc;
      }, {} as Record<number, { institucion: any; programas: any[] }>);

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
