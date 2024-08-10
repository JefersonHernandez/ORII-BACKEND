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
    return res
      .status(200)
      .json(data.map((item) => ({ ...item, name: item.nombre })));
  };

  static readonly getAgreementMobility = async (
    req: Request,
    res: Response
  ) => {
    const { id } = req.params;
    const repository = AppDataSource.getRepository(TipoMovilidadConvenio);

    const data = await repository.findOne({
      where: {
        id: Number(id),
      },
    });
    return res.status(200).json({ ...data, name: data.nombre });
  };

  static readonly addAgreementMobility = async (
    req: Request,
    res: Response
  ) => {
    const { name } = req.body;

    const repository = AppDataSource.getRepository(TipoMovilidadConvenio);

    try {
      const newItem = repository.create({
        nombre: name,
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
  static readonly updateAgreementMobility = async (
    req: Request,
    res: Response
  ) => {
    const { name } = req.body;

    const repository = AppDataSource.getRepository(TipoMovilidadConvenio);

    try {
      const { id } = req.params;

      const agreementMobility = await repository.findOneBy({
        id: parseInt(id, 10),
      });

      if (!agreementMobility) {
        return res.status(404).json({ error: "Agreement mobility not found" });
      }

      agreementMobility.nombre = name;

      await repository.save(agreementMobility);

      res
        .status(200)
        .json({ message: "Agreement mobility updated successfully" });
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Error al insertar el tipo de movilidad" });
    }
  };
}
