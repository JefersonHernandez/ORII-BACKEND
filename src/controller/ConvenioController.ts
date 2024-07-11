import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Convenio } from "../entity/Convenio";

export class ConvenioController {
  static readonly getConvenios = async (_: Request, res: Response) => {
    const repository = AppDataSource.getRepository(Convenio);

    const data = await repository.find();
    return res.status(200).json(data);
  };

  static readonly getConvenio = async (req: Request, res: Response) => {
    const { id } = req.params;
    const repository = AppDataSource.getRepository(Convenio);

    const data = await repository.find({
      id: Number(id),
    });
    return res.status(200).json(data);
  };
}
