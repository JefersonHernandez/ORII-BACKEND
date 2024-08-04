import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { TipoMovilidadConvenio } from "../entity/TipoMovilidadConvenio";

export class TipoMovilidadConvenioController {
  static readonly getTipoMovilidadConvenios = async (
    _: Request,
    res: Response
  ) => {
    const repository = AppDataSource.getRepository(TipoMovilidadConvenio);

    const data = await repository.find({
      select: ["id", "nombre"],
    });
    return res.status(200).json(data);
  };

  static readonly getTipoMovilidadConvenio = async (
    req: Request,
    res: Response
  ) => {
    const { id } = req.params;
    const repository = AppDataSource.getRepository(TipoMovilidadConvenio);

    const data = await repository.findBy({
      id: Number(id),
    });
    return res.status(200).json(data);
  };

  static readonly addMobilityForAgreements = async (
    req: Request,
    res: Response
  ) => {
    const { nombre } = req.body;

    const repository = AppDataSource.getRepository(TipoMovilidadConvenio);

    try {
      const newItem = repository.create({
        nombre,
      });

      await repository.save(newItem);

      res.status(201);
      res.send();
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Error al insertar el tipo de movilidad" });
    }
  };
}
