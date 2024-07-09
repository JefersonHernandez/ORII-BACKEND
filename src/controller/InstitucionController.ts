import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Institucion } from "../entity/Institucion";

export class InstitucionController {
  static readonly getInstituciones = async (_: Request, res: Response) => {
    const repository = AppDataSource.getRepository(Institucion);

    const data = await repository.find({ select: ["id", "nombre"] });
    return res.status(200).json(data);
  };

  static readonly getInstitucion = async (req: Request, res: Response) => {
    const { id } = req.params;
    const repository = AppDataSource.getRepository(Institucion);

    const data = await repository.findBy({
      id: Number(id),
    });
    return res.status(200).json(data);
  };
}
