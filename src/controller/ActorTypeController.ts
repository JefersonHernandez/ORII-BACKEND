import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Rol } from "../entity/Rol";

export class ActorTypeController {
  static readonly getActorTypes = async (_: Request, res: Response) => {
    const repository = AppDataSource.getRepository(Rol);

    const data = await repository.find();
    return res.status(200).json(data);
  };
}
