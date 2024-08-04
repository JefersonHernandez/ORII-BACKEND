import { Request, Response } from "express";
import { Not } from "typeorm";
import { AppDataSource } from "../data-source";
import { Institucion } from "../entity/Institucion";

const UFPS = 23;

export class InstitucionController {
  static readonly getInstitutions = async (_: Request, res: Response) => {
    const repository = AppDataSource.getRepository(Institucion);

    const data = await repository.find({
      relations: {
        programaInstituciones: true,
        contact: true,
      },
    });
    return res.status(200).json(data);
  };

  static readonly getInstitution = async (req: Request, res: Response) => {
    const { id } = req.params;
    const repository = AppDataSource.getRepository(Institucion);

    const data = await repository.findOne({
      where: { id: Number(id) },
      relations: {
        programaInstituciones: true,
        contact: true,
        city: true,
      },
    });
    return res.status(200).json(data);
  };

  static readonly createInstitution = async (req: Request, res: Response) => {
    const { name, contact_id, city_id } = req.body;

    const repository = AppDataSource.getRepository(Institucion);

    try {
      const institucion = repository.create({
        name,
        contact_id,
        city_id,
      });

      await repository.save(institucion);

      res.status(201).json({ message: "Institution created successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error al insertar institucion" });
    }
  };

  static readonly getInstitucionesForConvenios = async (
    _: Request,
    res: Response
  ) => {
    const repository = AppDataSource.getRepository(Institucion);

    const data = await repository.find({
      relations: {
        contact: true,
        programaInstituciones: true,
      },
      where: {
        id: Not(UFPS),
      },
    });
    return res.status(200).json(data);
  };

  static readonly updateInstitution = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, contact_id, city_id } = req.body;

    const repository = AppDataSource.getRepository(Institucion);

    try {
      const institution = await repository.findOneBy({ id: parseInt(id, 10) });

      if (!institution) {
        return res.status(404).json({ error: "Institution not found" });
      }

      institution.name = name;
      institution.contact_id = contact_id;
      institution.city_id = city_id;

      await repository.save(institution);

      res.status(201).json({ message: "Institution updated successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error al insertar institucion" });
    }
  };
}
