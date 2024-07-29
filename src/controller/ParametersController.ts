import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Parameters } from "../entity/Parameters";

export class ParametersController {
  static readonly getAppParameters = async (_: Request, res: Response) => {
    const repository = AppDataSource.getRepository(Parameters);

    const data = await repository.find({
      take: 1,
      order: { id: "ASC" },
    });

    return res.status(200).json(data[0]);
  };
}
