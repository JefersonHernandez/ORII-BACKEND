import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Ciudad } from "../entity/Ciudad";

export class CiudadController {
  static readonly getCiudades = async (_: Request, res: Response) => {
    const repository = AppDataSource.getRepository(Ciudad);

    const data = await repository.find({ select: ["id", "nombre"] });
    return res.status(200).json(data);
  };

  static readonly getCiudad = async (req: Request, res: Response) => {
    const { id } = req.params;
    const repository = AppDataSource.getRepository(Ciudad);

    const data = await repository.findBy({
      id: Number(id),
    });
    return res.status(200).json(data);
  };
}
