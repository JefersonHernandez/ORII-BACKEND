import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { FuenteFinanciacionNacional } from "../entity/FuenteFinanciacionNacional";
import { FuenteFinanciacionInternacional } from "../entity/FuenteFinanciacionInternacional";
import { TipoDocumento } from "../entity/TipoDocumento";
import { EstadoCivil } from "../entity/EstadoCivil";
import { TipoMovilidad } from "../entity/TipoMovilidad";
import { ModalidadMovilidad } from "../entity/ModalidadMovilidad";
import { Actividad } from "../entity/Actividad";

export class CatalogoController {
  static getAllFuenteFinanciacionNacional = async (
    req: Request,
    res: Response
  ) => {
    const catalogRepository = AppDataSource.getRepository(
      FuenteFinanciacionNacional
    );

    const data = await catalogRepository.find({ select: ["id", "nombre"] });
    return res.status(200).json(data);
  };

  static getAllFuenteFinanciacionInternacional = async (
    req: Request,
    res: Response
  ) => {
    const catalogRepository = AppDataSource.getRepository(
      FuenteFinanciacionInternacional
    );

    const data = await catalogRepository.find({ select: ["id", "nombre"] });
    return res.status(200).json(data);
  };

  static getAllTipoDocumento = async (req: Request, res: Response) => {
    const catalogRepository = AppDataSource.getRepository(TipoDocumento);

    const data = await catalogRepository.find({ select: ["id", "nombre"] });
    return res.status(200).json(data);
  };

  static getAllEstadoCivil = async (req: Request, res: Response) => {
    const catalogRepository = AppDataSource.getRepository(EstadoCivil);

    const data = await catalogRepository.find({ select: ["id", "nombre"] });
    return res.status(200).json(data);
  };

  static getAllTipoMovilidad = async (req: Request, res: Response) => {
    const catalogRepository = AppDataSource.getRepository(TipoMovilidad);

    const data = await catalogRepository.find({ select: ["id", "nombre"] });
    return res.status(200).json(data);
  };

  static getAllModalidadMovilidad = async (req: Request, res: Response) => {
    const catalogRepository = AppDataSource.getRepository(ModalidadMovilidad);

    const data = await catalogRepository.find({ select: ["id", "nombre"] });
    return res.status(200).json(data);
  };

  static getAllActividad = async (req: Request, res: Response) => {
    const catalogRepository = AppDataSource.getRepository(Actividad);

    const data = await catalogRepository.find({ select: ["id", "nombre"] });
    return res.status(200).json(data);
  };
}
