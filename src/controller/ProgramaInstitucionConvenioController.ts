import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { ProgramaInstitucionConvenio } from "../entity/ProgramaInstitucionConvenio";

export class ProgramaInstitucionConvenioController {
  static readonly getAllProgramaInstitucions = async (
    req: Request,
    res: Response
  ) => {
    const repository = AppDataSource.getRepository(ProgramaInstitucionConvenio);

    try {
      const data = await repository.find({
        relations: {
          agreement: true,
          programInstitution: true,
        },
      });

      if (data.length > 0) {
        res.json(data);
      } else {
        res.status(404).json({
          message: "No se encontraron programas institucion convenios",
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
