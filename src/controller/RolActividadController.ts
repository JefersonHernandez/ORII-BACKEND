import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { RolActividad } from "../entity/RolActividad";

export class RolActividadController {
  static readonly getAllActivityByRol = async (req: Request, res: Response) => {
    const { id } = req.params;

    let idNum = parseInt(id);
    const repository = AppDataSource.getRepository(RolActividad);

    try {
      const data = await repository.find({
        relations: {
          actividad: true,
        },
        where: {
          rol: { id: idNum },
        },
      });

      const formattedData = data.map((rolActividad) => ({
        id: rolActividad.actividad.id,
        nombre: rolActividad.actividad.nombre,
        fecha_creacion: rolActividad.actividad.fecha_creacion,
        fecha_actualizacion: rolActividad.actividad.fecha_actualizacion,
        fecha_eliminacion: rolActividad.actividad.fecha_eliminacion,
      }));

      if (data.length > 0) {
        res.json(formattedData);
      } else {
        res.status(404).json({
          message: "No se encontraron actividades para este rol.",
        });
      }
    } catch (error) {
      res.status(404).json({
        message: "Sin resultados",
        error,
      });
    }
  };
}
