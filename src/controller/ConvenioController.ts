import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Convenio } from "../entity/Convenio";
import { ProgramaInstitucionConvenio } from "../entity/ProgramaInstitucionConvenio";

export class ConvenioController {
  static readonly getAgreements = async (_: Request, res: Response) => {
    const repository = AppDataSource.getRepository(Convenio);

    const data = await repository.find({
      relations: {
        agreementType: true,
        programInstitutionAgreements: {
          programInstitution: {
            program: true,
            institution: {
              contact: true,
            },
          },
        },
        tipoMovilidadConvenioConvenios: {
          tipoMovilidadConvenio: true,
        },
      },
    });

    return res.status(200).json(data);
  };

  static readonly getAgreement = async (req: Request, res: Response) => {
    const { id } = req.params;
    const repository = AppDataSource.getRepository(Convenio);

    const data = await repository.findOne({
      where: {
        id: Number(id),
      },
      relations: {
        agreementType: true,
        programInstitutionAgreements: {
          programInstitution: true,
        },
        tipoMovilidadConvenioConvenios: {
          tipoMovilidadConvenio: true,
        },
      },
      loadEagerRelations: true,
    });
    return res.status(200).json(data);
  };

  static readonly createAgreement = async (req: Request, res: Response) => {
    const {
      name,
      code,
      title,
      object,
      type_agreement_id,
      seccional_ocania,
      end_date,
      ufps_programs,
      programs,
      institution_id,
      date,
      validity,
    } = req.body;

    const repository = AppDataSource.getRepository(Convenio);

    try {
      const programaInstitucionConvenioRepository = AppDataSource.getRepository(
        ProgramaInstitucionConvenio
      );

      await AppDataSource.transaction(async (transactionalEntityManager) => {
        const newConvenio = repository.create({
          name,
          code,
          title,
          object,
          type_agreement_id,
          seccional_ocania,
          end_date,
          institution_id,
          date,
          validity,
        });
        const response = await transactionalEntityManager.save(newConvenio);

        const programaInstitucionConvenios = [
          ...programs.map((program_id: number) => ({
            agreement_id: response.id,
            program_institution_id: program_id,
          })),
          ...ufps_programs.map((program_id: number) => ({
            agreement_id: response.id,
            program_institution_id: program_id,
          })),
        ].map((data) => programaInstitucionConvenioRepository.create(data));

        await transactionalEntityManager.save(programaInstitucionConvenios);
      });

      return res.status(201).json({ message: "Convenio creado" });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ error: "Error al insertar convenio", data: error });
    }
  };

  static readonly updateAgreement = async (req: Request, res: Response) => {
    const { id } = req.params;
    const {
      name,
      code,
      title,
      object,
      type_agreement_id,
      seccional_cucuta,
      seccional_ocania,
      end_date,
      ufps_programs,
      programs,
      institution_id,
      date,
      validity,
    } = req.body;

    const repository = AppDataSource.getRepository(Convenio);

    try {
      const programaInstitucionConvenioRepository = AppDataSource.getRepository(
        ProgramaInstitucionConvenio
      );

      const program = await repository.findOneBy({ id: parseInt(id, 10) });

      if (!program) {
        return res.status(404).json({ error: "Convenio not found" });
      }

      await AppDataSource.transaction(async (transactionalEntityManager) => {
        program.name = name;
        program.code = code;
        program.title = title;
        program.object = object;
        program.type_agreement_id = type_agreement_id;
        program.seccional_ocania = seccional_ocania;
        program.end_date = end_date;
        program.institution_id = institution_id;
        program.date = date;
        program.validity = validity;

        const response = await transactionalEntityManager.save(program);

        const existingAssociations =
          await programaInstitucionConvenioRepository.find({
            where: { agreement_id: response.id },
          });

        const existingAssociationsIds = existingAssociations.map(
          (assoc) => assoc.program_institution_id
        );

        console.log("existingAssociations", existingAssociations);

        const newProgramIds = [
          ...programs.map((program_id: number) => ({
            agreement_id: response.id,
            program_institution_id: program_id,
          })),
          ...ufps_programs.map((program_id: number) => ({
            agreement_id: response.id,
            program_institution_id: program_id,
          })),
        ];

        const prev = newProgramIds.filter((el) =>
          existingAssociationsIds.includes(el.program_institution_id)
        );
        const areNew = newProgramIds.filter(
          (el) => !existingAssociationsIds.includes(el.program_institution_id)
        );
        const toDelete = prev.filter((el) => !areNew.includes(el));

        console.log("prev", prev);
        console.log("areNew", areNew);
        console.log("toDelete", toDelete);

        const currentProgramIds = existingAssociations.map(
          (assoc) => assoc.program_institution_id
        );

        console.log("currentProgramIds", currentProgramIds);

        const programIdsToAdd = newProgramIds.map(
          (program) => program.program_institution_id
        );
        console.log("programIdsToAdd", programIdsToAdd);

        const idsToRemove = currentProgramIds.filter(
          (id) => !programIdsToAdd.includes(id)
        );
        console.log("idsToRemove", idsToRemove);
        console.log(
          "idsToRemove",
          existingAssociations
            .filter((item) => idsToRemove.includes(item.program_institution_id))
            .map((item) => item.id)
        );

        if (idsToRemove.length > 0) {
          // await programaInstitucionConvenioRepository.delete({
          //   program_institution_id: In(idsToRemove),
          // });
          await transactionalEntityManager.delete(
            ProgramaInstitucionConvenio,
            existingAssociations
              .filter((item) =>
                idsToRemove.includes(item.program_institution_id)
              )
              .map((item) => item.id)
          );
        }

        await transactionalEntityManager.save(
          areNew.map((data) =>
            programaInstitucionConvenioRepository.create(data)
          )
        );
      });

      return res.status(201).json({ message: "Convenio creado" });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ error: "Error al insertar convenio", data: error });
    }
  };
}
