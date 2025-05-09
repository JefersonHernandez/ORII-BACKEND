import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { TipoMovilidadConvenioConvenio } from "../entity/TipoMovilidadConvenioConvenio";

export class TipoMovilidadConvenioConvenioController {
  static readonly getTipoMovilidadConvenioConvenios = async (
    _: Request,
    res: Response
  ) => {
    const repository = AppDataSource.getRepository(
      TipoMovilidadConvenioConvenio
    );

    const data = await repository.find({
      select: ["id"],
      relations: {
        tipoMovilidadConvenio: true,
        convenio: true,
      },
    });
    return res.status(200).json(data);
  };

  static readonly getTipoMovilidadConvenioConvenio = async (
    req: Request,
    res: Response
  ) => {
    const { id } = req.params;
    const repository = AppDataSource.getRepository(
      TipoMovilidadConvenioConvenio
    );

    const data = await repository.findBy({
      id: Number(id),
    });
    return res.status(200).json(data);
  };
}
