import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Roles } from "../entity/Roles";

export class RolesController {
  static readonly getRoles = async (req: Request, res: Response) => {
    const programaRepository = AppDataSource.getRepository(Roles);
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
}
