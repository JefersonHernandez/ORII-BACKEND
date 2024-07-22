import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { ProgramaInstitucion } from "../entity/ProgramaInstitucion";

export class ProgramaInstitucionController {
  static readonly getAllProgramaInstitucions = async (
    req: Request,
    res: Response
  ) => {
    const repository = AppDataSource.getRepository(ProgramaInstitucion);

    try {
      const data = await repository.find({
        relations: {
          programa: true,
          institucion: true,
        },
      });

      if (data.length > 0) {
        res.json(data);
      } else {
        res.status(404).json({
          message: "No se encontraron programas instituciones",
        });
      }
    } catch (error) {
      res.status(404).json({
        message: "Sin resultados",
        error,
      });
    }
  };

  static readonly getAllProgramaByInstitucion = async (
    req: Request,
    res: Response
  ) => {
    const { id } = req.params;
    const repository = AppDataSource.getRepository(ProgramaInstitucion);

    try {
      const data = await repository.find({
        relations: {
          programa: true,
          institucion: false,
        },
        where: {
          institucion_id: Number(id),
        },
      });

      if (data.length > 0) {
        res.json(data);
      } else {
        res.status(404).json({
          message: "No se encontraron programas",
        });
      }
    } catch (error) {
      res.status(404).json({
        message: "Sin resultados",
        error,
      });
    }
  };
}
