import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Programa } from "../entity/Programa";

export class ProgramaController {
  static readonly getAllDataOfPrograms = async (
    req: Request,
    res: Response
  ) => {
    const programaRepository = AppDataSource.getRepository(Programa);
    try {
      const data = await programaRepository.find({
        // relations: {
        //   facultad: true,
        // },
      });

      if (data) {
        res.send(data);
      } else {
        res.status(404).json({
          message: "Facultad no encontrada",
        });
      }
    } catch (error) {
      res.status(404).json({
        message: "Sin resultados",
        error,
      });
    }
  };

  static readonly getProgramById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const programaRepository = AppDataSource.getRepository(Programa);
    try {
      const data = await programaRepository.find({
        relations: {
          facultad: true,
        },
        where: {
          facultadId: Number(id),
        },
      });

      if (data) {
        res.send(data);
      } else {
        res.status(404).json({
          message: "Facultad no encontrada",
        });
      }
    } catch (error) {
      res.status(404).json({
        message: "Sin resultados",
        error,
      });
    }
  };

  static readonly createPrograma = async (req: Request, res: Response) => {
    const { name, facultad_id } = req.body;

    const repository = AppDataSource.getRepository(Programa);

    try {
      const newPrograma = repository.create({
        name,
        facultadId: facultad_id,
      });

      const response = await repository.save(newPrograma);

      return res.status(201).json(response);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error al insertar convenio" });
    }
  };
}
