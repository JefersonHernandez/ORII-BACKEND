import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Contacto } from "../entity/Contacto";
import { Institucion } from "../entity/Institucion";

export class InstitucionController {
  static readonly getInstituciones = async (_: Request, res: Response) => {
    const repository = AppDataSource.getRepository(Institucion);

    const data = await repository.find({ select: ["id", "nombre"] });
    return res.status(200).json(data);
  };

  static readonly getInstitucion = async (req: Request, res: Response) => {
    const { id } = req.params;
    const repository = AppDataSource.getRepository(Institucion);

    const data = await repository.findBy({
      id: Number(id),
    });
    return res.status(200).json(data);
  };

  static readonly createInstitucion = async (req: Request, res: Response) => {
    const { name, contact_name, charge, email, web, ciudad_id } = req.body;

    const repository = AppDataSource.getRepository(Institucion);
    const repositoryContacto = AppDataSource.getRepository(Contacto);

    try {
      const newInstitucion = repository.create({
        nombre: name,
        ciudad_id,
      });

      const response = await AppDataSource.transaction(
        async (transactionalEntityManager) => {
          const response = await transactionalEntityManager.save(
            newInstitucion
          );
          const newContacto = repositoryContacto.create({
            nombre: contact_name,
            cargo: charge,
            correo: email,
            sitio_web: web,
            institucion_id: response.id,
          });
          await transactionalEntityManager.save(newContacto);
        }
      );

      return res.status(201).json(response);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error al insertar institucion" });
    }
  };
}
