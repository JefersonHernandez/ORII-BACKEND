import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Programa } from "../entity/Programa";

export class ProgramaController {
  static readonly getProgramsByFaculty = async (
    req: Request,
    res: Response
  ) => {
    const programaRepository = AppDataSource.getRepository(Programa);
    try {
      const data = await programaRepository.find({
        where: {
          faculty_id: Number(req.params.id),
        },
      });

      res.send(data);
    } catch (error) {
      res.status(404).json({
        message: "Sin resultados",
        error,
      });
    }
  };

  static readonly getAllDataOfPrograms = async (
    req: Request,
    res: Response
  ) => {
    const programaRepository = AppDataSource.getRepository(Programa);
    try {
      const data = await programaRepository.find();

      res.send(data);
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
          faculty_id: Number(id),
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

  static readonly getProgram = async (req: Request, res: Response) => {
    const { id } = req.params;

    const programaRepository = AppDataSource.getRepository(Programa);
    try {
      const data = await programaRepository.findOne({
        where: {
          id: Number(id),
        },
      });

      res.send(data);
    } catch (error) {
      res.status(404).json({
        message: "Program not found",
        error,
      });
    }
  };

  static readonly addProgram = async (req: Request, res: Response) => {
    const { name, faculty_id } = req.body;

    const repository = AppDataSource.getRepository(Programa);

    try {
      const program = repository.create({
        name,
        faculty_id,
      });

      await repository.save(program);

      return res.status(201).json({ message: "Program created successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error al insertar convenio" });
    }
  };

  static readonly updateProgram = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, faculty_id } = req.body;

    const repository = AppDataSource.getRepository(Programa);

    try {
      const program = await repository.findOneBy({ id: parseInt(id, 10) });

      if (!program) {
        return res.status(404).json({ error: "Program not found" });
      }

      program.name = name;
      program.faculty_id = faculty_id;

      await repository.save(program);

      res.status(200).json({ message: "Program updated successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error al insertar convenio" });
    }
  };
}
