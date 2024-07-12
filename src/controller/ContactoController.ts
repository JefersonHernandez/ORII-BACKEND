import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Contacto } from "../entity/Contacto";

export class ContactoController {
  static readonly getContactos = async (_: Request, res: Response) => {
    const repository = AppDataSource.getRepository(Contacto);

    const data = await repository.find({
      select: ["id", "nombre"],
    });
    return res.status(200).json(data);
  };

  static readonly getContacto = async (req: Request, res: Response) => {
    const { id } = req.params;
    const repository = AppDataSource.getRepository(Contacto);

    const data = await repository.findBy({
      id: Number(id),
    });
    return res.status(200).json(data);
  };

  static readonly insert = async (req: Request, res: Response) => {
    const { nombre, cargo, correo, sitio_web, institucion_id } = req.body;

    const repository = AppDataSource.getRepository(Contacto);

    try {
      const newItem = repository.create({
        nombre,
        cargo,
        correo,
        sitio_web,
        institucion_id: Number(institucion_id),
      });

      await repository.save(newItem);

      return res.status(201).json(newItem);
    } catch (error) {
      return res.status(500).json({ error: "Error al insertar contacto" });
    }
  };
}
