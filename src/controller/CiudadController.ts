import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Ciudad } from "../entity/Ciudad";

export class CiudadController {
  static readonly getCities = async (req: Request, res: Response) => {
    const repository = AppDataSource.getRepository(Ciudad);

    const { country_id } = req.query;

    let cities = [];

    if (country_id) {
      cities = await repository.find({
        where: { country_id: Number(country_id) },
      });
    } else {
      cities = await repository.find();
    }

    return res.status(200).json(cities);
  };

  static readonly getCity = async (req: Request, res: Response) => {
    const { id } = req.params;
    const repository = AppDataSource.getRepository(Ciudad);

    const data = await repository.findOne({
      where: { id: Number(id) },
    });

    return res.status(200).json(data);
  };

  static readonly createCity = async (req: Request, res: Response) => {
    const { name, country_id } = req.body;

    const repository = AppDataSource.getRepository(Ciudad);

    try {
      const newItem = repository.create({
        name,
        country_id: Number(country_id),
      });

      await repository.save(newItem);

      res.status(201).json({ message: "City created successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Error creating city" });
    }
  };

  static readonly updateCity = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, country_id } = req.body;

    const repository = AppDataSource.getRepository(Ciudad);

    try {
      const country = await repository.findOneBy({ id: parseInt(id, 10) });

      if (!country) {
        return res.status(404).json({ error: "City not found" });
      }

      country.name = name;
      country.country_id = country_id;

      await repository.save(country);

      res.status(200).json({ message: "City updated successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Error updating city" });
    }
  };
}
