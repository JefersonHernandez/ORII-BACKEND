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

  static readonly add = async (req: Request, res: Response) => {
    const { nombre } = req.body;

    const repository = AppDataSource.getRepository(TipoConvenio);

    try {
      const newItem = repository.create({
        nombre,
      });

      await repository.save(newItem);

      return res.status(201).json(newItem);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Error al insertar el tipo de convenio" });
    }
  };
}
