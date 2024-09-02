import axios from "axios";
import { endOfYear, startOfYear } from "date-fns";
import { Request, Response } from "express";
import { Between } from "typeorm";
import { AppDataSource } from "../data-source";
import { MovilidadActor } from "../entity/MovilidadActor";

export class MovilidadController {
  static newMovilidad = async (req: Request, res: Response) => {
    const {
      mobility_type_id,
      mobility_class_id,
      actor_code,
      faculty_id,
      program_id,
      year,
      semester_id,
      activity_id,
      activity_description,
      origin_institution,
      origin_institution_address,
      origin_country_id,
      origin_state,
      origin_municipality,
      institutional_destiny,
      institutional_destiny_address,
      destiny_country_id,
      destination_state,
      destination_municipality,
      days,
      application_id,
      national_financing_id,
      national_financing_amount,
      international_financing_id,
      financer_country_id,
      international_financing_amount,
      actor_type_id,
      agreement_id,
      mobility_source_id,
      office,
    } = req.body;
    const mov = new MovilidadActor();

    mov.mobility_type_id = mobility_type_id;
    mov.mobility_source_id = mobility_source_id;
    mov.mobility_class_id = mobility_class_id;
    mov.actor_code = actor_code;
    mov.faculty_id = faculty_id;
    mov.program_id = program_id;
    mov.year = year;
    mov.semester_id = semester_id;
    mov.activity_id = activity_id;
    mov.activity_description = activity_description;
    mov.origin_institution = origin_institution;
    mov.origin_institution_address = origin_institution_address;
    mov.origin_country_id = origin_country_id;
    mov.origin_state = origin_state;
    mov.origin_municipality = origin_municipality;
    mov.institutional_destiny = institutional_destiny;
    mov.institutional_destiny_address = institutional_destiny_address;
    mov.destiny_country_id = destiny_country_id;
    mov.destination_state = destination_state;
    mov.destination_municipality = destination_municipality;
    mov.days = days;
    mov.application_id = application_id;
    mov.national_financing_id = national_financing_id;
    mov.national_financing_amount = national_financing_amount;
    mov.international_financing_id = international_financing_id;
    mov.international_financing_amount = international_financing_amount;
    mov.financer_country_id = financer_country_id;
    mov.office = office;
    mov.rol_id = actor_type_id;
    mov.agreement_id = agreement_id;

    try {
      const movReporsitory = AppDataSource.getRepository(MovilidadActor);
      await movReporsitory.save(mov);
      res.status(200);
      res.send();
    } catch (error) {
      res.status(500);
      res.send();
    }
  };

  static updateMovilidad = async (req: Request, res: Response) => {
    const {
      mobility_type_id,
      mobility_class_id,
      actor_code,
      faculty_id,
      program_id,
      year,
      semester_id,
      activity_id,
      activity_description,
      origin_institution,
      origin_institution_address,
      origin_country_id,
      origin_state,
      origin_municipality,
      institutional_destiny,
      institutional_destiny_address,
      destiny_country_id,
      destination_state,
      destination_municipality,
      days,
      application_id,
      national_financing_id,
      national_financing_amount,
      international_financing_id,
      financer_country_id,
      international_financing_amount,
      actor_type_id,
      agreement_id,
      mobility_source_id,
      office,
    } = req.body;
    try {
      const repository = AppDataSource.getRepository(MovilidadActor);

      const mov = await repository.findOneBy({
        id: Number(req.params.id),
      });

      if (!mov) {
        return res.status(404).json({ error: "Not found" });
      }

      mov.mobility_type_id = mobility_type_id;
      mov.mobility_source_id = mobility_source_id;
      mov.mobility_class_id = mobility_class_id;
      mov.actor_code = actor_code;
      mov.faculty_id = faculty_id;
      mov.program_id = program_id;
      mov.year = year;
      mov.semester_id = semester_id;
      mov.activity_id = activity_id;
      mov.activity_description = activity_description;
      mov.origin_institution = origin_institution;
      mov.origin_institution_address = origin_institution_address;
      mov.origin_country_id = origin_country_id;
      mov.origin_state = origin_state;
      mov.origin_municipality = origin_municipality;
      mov.institutional_destiny = institutional_destiny;
      mov.institutional_destiny_address = institutional_destiny_address;
      mov.destiny_country_id = destiny_country_id;
      mov.destination_state = destination_state;
      mov.destination_municipality = destination_municipality;
      mov.days = days;
      mov.application_id = application_id;
      mov.national_financing_id = national_financing_id;
      mov.national_financing_amount = national_financing_amount;
      mov.international_financing_id = international_financing_id;
      mov.international_financing_amount = international_financing_amount;
      mov.financer_country_id = financer_country_id;
      mov.office = office;
      mov.rol_id = actor_type_id;
      mov.agreement_id = agreement_id;

      await repository.save(mov);

      res.status(201);
      res.send();
    } catch (error) {
      res.status(500);
      res.send();
    }
  };

  static getDataMovilidadById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const movilidadReporsitory = AppDataSource.getRepository(MovilidadActor);
    try {
      const data = await movilidadReporsitory.findOne({
        relations: {
          actor: true,
        },
        where: {
          id: Number(id),
        },
      });

      res.send(data);
    } catch (error) {
      res.status(404);
      res.send();
    }
  };

  static getRecentMovility = async (req: Request, res: Response) => {
    const { start_date, end_date, mobility_class, mobility_type, actor } =
      req.query;

    const timezoneOffset: number = Number(req.headers["x-timezone-offset"]);

    const startDate = new Date();
    const endDate = new Date();

    startDate.setFullYear(Number(start_date));
    endDate.setFullYear(Number(end_date));

    let mobility_classes: { id: number; nombre: string }[] = [];
    let mobility_types: { id: number; nombre: string }[] = [];
    let actors: { id: number; nombre: string }[] = [];

    const adjustedStartDate = start_date
      ? adjustDateByOffset(startOfYear(startDate), timezoneOffset)
      : undefined;
    const adjustedEndDate = end_date
      ? adjustDateByOffset(endOfYear(endDate), timezoneOffset)
      : undefined;

    if (mobility_class) {
      mobility_classes = await axios
        .get("http://localhost:3000/catalog/mobility-mode", {
          headers: {
            Authorization: req.headers.authorization,
          },
        })
        .then((data) => data.data);
    }

    if (mobility_type) {
      mobility_types = await axios
        .get("http://localhost:3000/catalog/mobility-type", {
          headers: {
            Authorization: req.headers.authorization,
          },
        })
        .then((data) => data.data);
    }

    if (actor) {
      actors = await axios
        .get("http://localhost:3000/catalog/rol", {
          headers: {
            Authorization: req.headers.authorization,
          },
        })
        .then((data) => data.data);
    }

    const movilidadReporsitory = AppDataSource.getRepository(MovilidadActor);
    try {
      const data = await movilidadReporsitory.find({
        relations: {
          actor: {
            document: true,
            sex: true,
            marital_status: true,
          },
          movility_type: true,
          mobility_source: true,
          mobility_class: true,
          faculty: true,
          program: true,
          semester: true,
          activity: true,
          origin_country: true,
          destiny_country: true,
          national_financing: true,
          international_financing: true,
          rol: true,
          agreement: true,
        },
        where: {
          ...(adjustedStartDate &&
            adjustedEndDate && {
              anio_mov: Between(adjustedStartDate, adjustedEndDate),
            }),
          ...(mobility_class && {
            clase_mov: mobility_classes.find(
              (item) => item.id === Number(mobility_class)
            ).nombre,
          }),
          ...(mobility_type && {
            tipo_mov: mobility_types.find(
              (item) => item.id === Number(mobility_type)
            ).nombre,
          }),
          ...(actor && {
            rol_id: actors.find((item) => item.id === Number(actor)).id,
          }),
        },
      });

      if (data) {
        res.send(data);
      } else {
        res.status(404).json({
          message: "Modalidad no encontrada",
        });
      }
    } catch (error) {
      res.status(404).json({
        message: "Sin resultados",
        error,
      });
    }
  };

  static getAllMovility = async (req: Request, res: Response) => {
    const movilidadReporsitory = AppDataSource.getRepository(MovilidadActor);
    try {
      const data = await movilidadReporsitory.find({
        relations: {
          actor: true,
        },
        order: {
          createdAt: "DESC",
        },
      });

      if (data) {
        res.send(data);
      } else {
        res.status(404).json({
          message: "Modalidades no encontradas",
        });
      }
    } catch (error) {
      res.status(404).json({
        message: "Sin resultados",
        error,
      });
    }
  };
}

const adjustDateByOffset = (date: Date, offset: number): Date => {
  // Offset en minutos
  const offsetInMilliseconds = offset * 60 * 1000;
  return new Date(date.getTime() - offsetInMilliseconds);
};
