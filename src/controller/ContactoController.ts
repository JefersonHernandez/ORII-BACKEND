import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Contacto } from "../entity/Contacto";

export class ContactoController {
  static readonly getContacts = async (_: Request, res: Response) => {
    const repository = AppDataSource.getRepository(Contacto);

    const data = await repository.find({
      relations: {
        institution: true,
      },
    });
    return res.status(200).json(data);
  };

  static readonly getContact = async (req: Request, res: Response) => {
    const { id } = req.params;
    const repository = AppDataSource.getRepository(Contacto);

    const data = await repository.findOne({
      where: { id: Number(id) },
      relations: {
        institution: true,
      },
    });
    return res.status(200).json(data);
  };

  static readonly createContact = async (req: Request, res: Response) => {
    const { name, position, email, web_site } = req.body;

    const repository = AppDataSource.getRepository(Contacto);

    try {
      const newItem = repository.create({
        name,
        position,
        email,
        web_site,
      });

      await repository.save(newItem);

      return res.status(201).json({ message: "Contact created successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Error creating contact" });
    }
  };

  static readonly updateContact = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, position, email, web_site } = req.body;

    const repository = AppDataSource.getRepository(Contacto);

    try {
      const country = await repository.findOneBy({ id: parseInt(id, 10) });

      if (!country) {
        return res.status(404).json({ error: "Contact not found" });
      }

      country.name = name;
      country.position = position;
      country.email = email;
      country.web_site = web_site;

      await repository.save(country);

      res.status(200).json({ message: "Contact updated successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Error updating contact" });
    }
  };
}
