import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Contacto } from "../entity/Contacto";

export class ContactoController {
  static readonly getContacts = async (_: Request, res: Response) => {
    const repository = AppDataSource.getRepository(Contacto);

    const data = await repository.find({
      select: [
        "id",
        "nombre",
        "cargo",
        "sitio_web",
        "institucion_id",
        "correo",
      ],
      relations: {
        institucion: true,
      },
    });
    return res.status(200).json(
      data.map(
        ({
          nombre,
          cargo,
          sitio_web,
          correo,
          institucion_id,
          institucion,
          ...rest
        }) => ({
          ...rest,
          name: nombre,
          position: cargo,
          web_site: sitio_web,
          correo,
          institution_id: institucion_id,
          institution: {
            id: institucion_id,
            name: institucion.nombre,
            city_id: institucion.ciudad_id,
          },
        })
      )
    );
  };

  static readonly getContact = async (req: Request, res: Response) => {
    const { id } = req.params;
    const repository = AppDataSource.getRepository(Contacto);

    const {
      nombre,
      cargo,
      sitio_web,
      correo,
      institucion_id,
      institucion,
      ...rest
    } = await repository.findOne({
      where: { id: Number(id) },
      relations: {
        institucion: true,
      },
    });
    return res.status(200).json({
      ...rest,
      name: nombre,
      position: cargo,
      web_site: sitio_web,
      email: correo,
      institution_id: institucion_id,
      institution: {
        id: institucion_id,
        name: institucion.nombre,
        city_id: institucion.ciudad_id,
      },
    });
  };

  static readonly createContact = async (req: Request, res: Response) => {
    const { name, position, email, web_site, institution_id } = req.body;

    const repository = AppDataSource.getRepository(Contacto);

    try {
      const newItem = repository.create({
        nombre: name,
        cargo: position,
        correo: email,
        sitio_web: web_site,
        institucion_id: Number(institution_id),
      });

      await repository.save(newItem);

      return res.status(201).json(newItem);
    } catch (error) {
      return res.status(500).json({ error: "Error creating contact" });
    }
  };

  static readonly updateContact = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, position, email, web_site, institution_id } = req.body;

    const repository = AppDataSource.getRepository(Contacto);

    try {
      const country = await repository.findOneBy({ id: parseInt(id, 10) });

      if (!country) {
        return res.status(404).json({ error: "Contact not found" });
      }

      country.nombre = name;
      country.cargo = position;
      country.correo = email;
      country.sitio_web = web_site;
      country.institucion_id = institution_id;

      await repository.save(country);

      res.status(200).json({ message: "Contact updated successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Error updating contact" });
    }
  };
}
