import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { TipoConvenio } from "../entity/TipoConvenio";

export class TipoConvenioController {
  static readonly getTipoConvenios = async (_: Request, res: Response) => {
    const repository = AppDataSource.getRepository(TipoConvenio);

    const data = await repository.find({ select: ["id", "nombre"] });
    return res.status(200).json(data);
  };

  static readonly getTipoConvenio = async (req: Request, res: Response) => {
    const { id } = req.params;
    const repository = AppDataSource.getRepository(TipoConvenio);

    const data = await repository.findBy({
      id: Number(id),
    });
    return res.status(200).json(data);
  };
}
