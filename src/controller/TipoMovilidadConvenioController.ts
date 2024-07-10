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
}
