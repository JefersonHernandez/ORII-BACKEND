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

  static readonly createConvenio = async (req: Request, res: Response) => {
    const {
      name,
      code,
      title,
      object,
      aggrement_type,
      seccional_cucuta,
      seccional_ocania,
      date_end,
    } = req.body;

    const repository = AppDataSource.getRepository(Convenio);

    try {
      const newConvenio = repository.create({
        nombre: name,
        codification: code,
        title,
        object,
        tipo_convenio_id: aggrement_type,
        seccional_cucuta,
        seccional_ocania,
        fecha_finalizacion: date_end,
      });

      const response = await AppDataSource.transaction(
        async (transactionalEntityManager) => {
          await transactionalEntityManager.save(newConvenio);
        }
      );

      return res.status(201).json(response);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error al insertar convenio" });
    }
  };
}
