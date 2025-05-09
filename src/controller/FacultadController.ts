import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Facultad } from "../entity/Facultad";

export class FacultadController {
  static getDataFacultadById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const facultadRepository = AppDataSource.getRepository(Facultad);

    try {
      const { programas, nombre, ...rest } = await facultadRepository.findOne({
        relations: {
          programas: true,
        },
        where: {
          id: Number(id),
        },
      });

      res.send({ ...rest, name: nombre });
    } catch (error) {
      res.status(404).json({
        message: "Sin resultados",
        error,
      });
    }
  };

  static getAllDataOfFacultad = async (req: Request, res: Response) => {
    const facultadRepository = AppDataSource.getRepository(Facultad);
    console.log("consulta", req.query);

    try {
      const data = await facultadRepository.find({
        relations: {
          programas: true,
        },
      });

      res.send(
        data.map(({ programas, nombre, ...rest }) => ({
          ...rest,
          name: nombre,
        }))
      );
    } catch (error) {
      res.status(404).json({
        message: "Faculties not found",
      });
    }
  };
}
