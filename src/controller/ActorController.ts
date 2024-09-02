import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Actor } from "../entity/Actor";

export class ActorController {
  static newActor = async (req: Request, res: Response) => {
    const {
      email,
      name,
      lastname,
      code,
      institutional_email,
      document_number,
      issued_on,
      issued_date,
      date_bithday,
      state_bithday,
      municipality_bithday,
      biological_sex,
      document_type,
      country_birthday,
      marital_status,
      phone_number,
    } = req.body;

    try {
      const actor = new Actor();

      actor.email = email;
      actor.nombres = name;
      actor.apellidos = lastname;
      actor.codigo = code;
      actor.email_inst = institutional_email;
      actor.document_id = document_type;
      actor.numero_doc = document_number;
      actor.expedido_en = issued_on;
      actor.fecha_expedicion = issued_date;
      actor.sex_id = biological_sex;
      actor.marital_status_id = marital_status;
      actor.fecha_nac = date_bithday;
      actor.country_of_birth_id = country_birthday;
      actor.email = email;
      actor.departamento = state_bithday;
      actor.municipio = municipality_bithday;
      actor.celular = phone_number;

      const reporsitory = AppDataSource.getRepository(Actor);

      await reporsitory.save(actor);
      res.status(201);
      res.send();
    } catch (error) {
      res.status(500);
      res.send();
    }
  };

  static updateActor = async (req: Request, res: Response) => {
    const {
      email,
      name,
      lastname,
      code,
      institutional_email,
      document_number,
      issued_on,
      issued_date,
      date_bithday,
      state_bithday,
      municipality_bithday,
      biological_sex,
      document_type,
      country_birthday,
      marital_status,
      phone_number,
    } = req.body;

    try {
      const repository = AppDataSource.getRepository(Actor);

      const actor = await repository.findOneBy({
        codigo: Number(req.params.codigo),
      });

      if (!actor) {
        return res.status(404).json({ error: "Not found" });
      }

      actor.email = email;
      actor.nombres = name;
      actor.apellidos = lastname;
      actor.codigo = Number(code);
      actor.email_inst = institutional_email;
      actor.document_id = document_type;
      actor.numero_doc = document_number;
      actor.expedido_en = issued_on;
      actor.fecha_expedicion = issued_date;
      actor.sex_id = biological_sex;
      actor.marital_status_id = marital_status;
      actor.fecha_nac = date_bithday;
      actor.country_of_birth_id = country_birthday;
      actor.email = email;
      actor.departamento = state_bithday;
      actor.municipio = municipality_bithday;
      actor.celular = phone_number;

      await repository.save(actor);
      res.status(201);
      res.send();
    } catch (error) {
      res.status(500);
      res.send();
    }
  };

  static getDataActorByCodigo = async (req: Request, res: Response) => {
    const reporsitory = AppDataSource.getRepository(Actor);

    try {
      const data = await reporsitory.findOne({
        relations: {
          document: true,
          sex: true,
          marital_status: true,
          country_of_birth: true,
        },
        where: { codigo: Number(req.params.codigo) },
      });
      res.send(data);
    } catch (error) {
      res.status(404);
      res.send();
    }
  };

  static getActors = async (_: Request, res: Response) => {
    const reporsitory = AppDataSource.getRepository(Actor);

    try {
      const data = await reporsitory.find({
        relations: {
          document: true,
          sex: true,
          marital_status: true,
          country_of_birth: true,
        },
      });
      res.send(data);
    } catch (error) {
      res.status(404);
      res.send();
    }
  };
}
