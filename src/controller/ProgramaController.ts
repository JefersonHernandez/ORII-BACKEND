import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Programa } from "../entity/Programa";

export class ProgramaController{

    static getAllDataOfPrograms = async (req: Request, res: Response) => {
        const { id } = req.params;
        let idNum = parseInt(id);
        const programaRepository = AppDataSource.getRepository(Programa);
        try {
          const data = await programaRepository.find({
            relations: {
                facultad: true,
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


    static getProgramById = async (req: Request, res: Response) => {
      const { id } = req.params;
      let idNum = parseInt(id);
      
      const programaRepository = AppDataSource.getRepository(Programa);
      try {
        const data = await programaRepository.find({
          relations: {
              facultad: true
          },where:{
            facultadId:idNum
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



}