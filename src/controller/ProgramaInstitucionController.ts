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

  static readonly addProgramaInstitucion = async (
    req: Request,
    res: Response
  ) => {
    const items = req.body;

    const repository = AppDataSource.getRepository(ProgramaInstitucion);

    try {
      const response = await AppDataSource.transaction(
        async (transactionalEntityManager) => {
          for await (const iterator of items) {
            const newInstitucion = repository.create({
              institucion_id: iterator.institucion_id,
              programa_id: iterator.programa_id,
            });
            await transactionalEntityManager.save(newInstitucion);
          }
        }
      );

      return res.status(201).json(response);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ error: "Error al insertar programa institucion" });
    }
  };
}
