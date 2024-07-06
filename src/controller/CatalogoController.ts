import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Actividad } from "../entity/Actividad";
import { EstadoCivil } from "../entity/EstadoCivil";
import { FuenteFinanciacionInternacional } from "../entity/FuenteFinanciacionInternacional";
import { FuenteFinanciacionNacional } from "../entity/FuenteFinanciacionNacional";
import { Gender } from "../entity/Gender";
import { MobilityApplication } from "../entity/MobilityApplication";
import { ModalidadMovilidad } from "../entity/ModalidadMovilidad";
import { Rol } from "../entity/Rol";
import { Semester } from "../entity/Semester";
import { TipoDocumento } from "../entity/TipoDocumento";
import { TipoMovilidad } from "../entity/TipoMovilidad";

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

  static getAllMobilityApplication = async (req: Request, res: Response) => {
    const catalogRepository = AppDataSource.getRepository(MobilityApplication);

    const data = await catalogRepository.find({ select: ["id", "nombre"] });
    return res.status(200).json(data);
  };

  static readonly getAllGenders = async (req: Request, res: Response) => {
    const catalogRepository = AppDataSource.getRepository(Gender);

    const data = await catalogRepository.find({ select: ["id", "nombre"] });
    return res.status(200).json(data);
  };

  static readonly getAllRols = async (req: Request, res: Response) => {
    const catalogRepository = AppDataSource.getRepository(Rol);

    const data = await catalogRepository.find({ select: ["id", "nombre"] });
    return res.status(200).json(data);
  };

  static readonly getAllSemesters = async (req: Request, res: Response) => {
    const catalogRepository = AppDataSource.getRepository(Semester);

    const data = await catalogRepository.find({ select: ["id", "nombre"] });
    return res.status(200).json(data);
  };
}
