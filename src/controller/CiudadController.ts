import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Ciudad } from "../entity/Ciudad";

export class CiudadController {
  static readonly getCiudades = async (req: Request, res: Response) => {
    const repository = AppDataSource.getRepository(Ciudad);

    const { pais_id } = req.query;

    let ciudades = [];

    if (pais_id) {
      ciudades = await repository.find({
        select: ["id", "nombre", "pais_id"],
        where: { pais_id: Number(pais_id) },
      });
    } else {
      ciudades = await repository.find({
        select: ["id", "nombre", "pais_id"],
      });
    }

    return res.status(200).json(ciudades);
  };

  static readonly getCiudad = async (req: Request, res: Response) => {
    const { id } = req.params;
    const repository = AppDataSource.getRepository(Ciudad);

    const data = await repository.findBy({
      id: Number(id),
    });
    return res.status(200).json(data);
  };

  static readonly insert = async (req: Request, res: Response) => {
    const { nombre, pais_id } = req.body;

    const repository = AppDataSource.getRepository(Ciudad);

    try {
      const newItem = repository.create({ nombre, pais_id: Number(pais_id) });

      await repository.save(newItem);

      return res.status(201).json(newItem);
    } catch (error) {
      return res.status(500).json({ error: "Error al insertar ciudad" });
    }
  };
}
