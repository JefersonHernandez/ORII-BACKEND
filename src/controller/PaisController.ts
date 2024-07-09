import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Pais } from "../entity/Pais";

export class PaisController {
  static readonly getPaises = async (_: Request, res: Response) => {
    const repository = AppDataSource.getRepository(Pais);

    const data = await repository.find({ select: ["id", "nombre"] });
    return res.status(200).json(data);
  };

  static readonly getPais = async (req: Request, res: Response) => {
    const { id } = req.params;
    const repository = AppDataSource.getRepository(Pais);

    const data = await repository.findBy({
      id: Number(id),
    });
    return res.status(200).json(data);
  };
}
