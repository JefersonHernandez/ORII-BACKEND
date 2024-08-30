import axios from "axios";
import { Request, Response } from "express";
import { In, Not } from "typeorm";
import { AppDataSource } from "../data-source";
import { Convenio } from "../entity/Convenio";
import { ProgramaInstitucionConvenio } from "../entity/ProgramaInstitucionConvenio";

export class ConvenioController {
  static readonly getAgreements = async (req: Request, res: Response) => {
    const repository = AppDataSource.getRepository(Convenio);

    const { source, faculty, mobility_types } = req.query;

    let internationalInstitutionsIds: number[] = [];
    let facultyIds: number[] = [];
    let mobilityTypesIds: number[] = [];

    if (source) {
      internationalInstitutionsIds = await axios
        .get("http://localhost:3000/institutions/international", {
          headers: {
            Authorization: req.headers.authorization,
          },
        })
        .then((data) => data.data.map((item) => item.id));
    }

    if (faculty) {
      facultyIds = (faculty as string).split(",").map((item) => Number(item));
    }

    if (mobility_types) {
      mobilityTypesIds = (mobility_types as string)
        .split(",")
        .map((item) => Number(item));
    }

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
      where: {
        ...(source && {
          ...(source === "international" && {
            institution_id: In(internationalInstitutionsIds),
          }),
          ...(source === "national" && {
            institution_id: Not(In(internationalInstitutionsIds)),
          }),
        }),
        ...(faculty && {
          programInstitutionAgreements: {
            programInstitution: {
              program: {
                faculty_id: In(facultyIds),
              },
            },
          },
        }),
        ...(mobility_types && {
          tipoMovilidadConvenioConvenios: {
            tipo_movilidad_convenio_id: In(mobilityTypesIds),
          },
        }),
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
    if (data.event_id) {
      const event = await axios.get(
        `http://localhost:3000/calendar/events/${data.event_id}`
      );
      return res.status(200).json({ ...data, event: event.data });
    }
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
      calendar_event_date_start,
      calendar_event_date_end,
    } = req.body;

    const repository = AppDataSource.getRepository(Convenio);

    try {
      let event = null;
      if (calendar_event_date_start && calendar_event_date_end) {
        event = await axios.post("http://localhost:3000/calendar/events", {
          summary: `Convenio - ${code}`,
          description: validity,
          date_start: calendar_event_date_start,
          date_end: calendar_event_date_end,
        });
      }
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
          event_id: event?.data?.id,
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
      event_id,
      calendar_event_date_start,
      calendar_event_date_end,
      reminder,
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

      let event = null;

      if (program.event_id) {
        await axios
          .get(`http://localhost:3000/calendar/events/${program.event_id}`)
          .then((data) => {
            event = data;
          });

        if (reminder) {
          await axios.put(
            `http://localhost:3000/calendar/events/${program.event_id}`,
            {
              summary: `Convenio - ${code}`,
              description: validity,
              date_start: calendar_event_date_start,
              date_end: calendar_event_date_end,
            }
          );
        } else if (!reminder && event?.data !== null) {
          await axios.delete(
            `http://localhost:3000/calendar/events/${program.event_id}`
          );
          program.event_id = null;
        } else if (reminder && event === null) {
          console.log("reminder", reminder);

          await axios.post("http://localhost:3000/calendar/events", {
            summary: `Convenio - ${code}`,
            description: validity,
            date_start: calendar_event_date_start,
            date_end: calendar_event_date_end,
          });
        }
      } else {
        event = await axios.post("http://localhost:3000/calendar/events", {
          summary: `Convenio - ${code}`,
          description: validity,
          date_start: calendar_event_date_start,
          date_end: calendar_event_date_end,
        });
        program.event_id = event.data.id;
      }
      console.log("event", event);
      console.log("reminder", reminder);

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
        // program.event_id = event.data.id;

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
