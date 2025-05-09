import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Pais } from "../entity/Pais";

export class PaisController {
  static readonly getPaises = async (_: Request, res: Response) => {
    const repository = AppDataSource.getRepository(Pais);

    const data = await repository.find();
    return res.status(200).json(data);
  };

  static readonly getAgreementCountry = async (req: Request, res: Response) => {
    const { id } = req.params;
    const repository = AppDataSource.getRepository(Pais);

    const data = await repository.findOne({
      where: { id: Number(id) },
    });

    return res.status(200).json(data);
  };

  static readonly createAgreementCountry = async (
    req: Request,
    res: Response
  ) => {
    const { name } = req.body;

    const repository = AppDataSource.getRepository(Pais);

    try {
      const country = repository.create({ name });

      await repository.save(country);

      res.status(201).json({ message: "Country created successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Error creating country" });
    }
  };

  static readonly updateAgreementCountry = async (
    req: Request,
    res: Response
  ) => {
    const { id } = req.params;
    const { name } = req.body;

    const repository = AppDataSource.getRepository(Pais);

    try {
      const country = await repository.findOneBy({ id: parseInt(id, 10) });

      if (!country) {
        return res.status(404).json({ error: "Country not found" });
      }

      country.name = name;

      await repository.save(country);

      res.status(200).json({ message: "Country updated successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Error updating country" });
    }
  };
}
