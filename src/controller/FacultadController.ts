import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Programa } from "../entity/Programa";
import { Facultad } from "../entity/Facultad";

export class FacultadController {

    static getDataFacultadById = async (req: Request, res: Response) => {
        const { id } = req.params;
        let idNum = parseInt(id);
        const facultadRepository = AppDataSource.getRepository(Facultad);
        try {
            const data = await facultadRepository.find({
              relations: {
                  programas: true,
              },where: {
                id: idNum
              }
          })
           
            if (data) {
                res.send(data);
              } else {
                res.status(404).json({
                  message: "Facultad no encontrada",
                });
              }

        } catch (error) {
            res.status(404).json({
                message: "Sin resultados",error,
            });
        }


    }


    static getAllDataOfFacultad = async (req: Request, res: Response) => {
      const { id } = req.params;
      let idNum = parseInt(id);
      
      const facultadRepository = AppDataSource.getRepository(Facultad);
      try {
          const data = await facultadRepository.find({
            relations: {
                programas: true,
            },
        })
         

          if (data) {
              res.send(data);
            } else {
              res.status(404).json({
                message: "Facultad no encontrada",
              });
            }

      } catch (error) {
          res.status(404).json({
              message: "Sin resultados",error,
          });
      }


  }
}