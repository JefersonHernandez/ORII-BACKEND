import { Request, Response } from "express";
import { Actor } from "../entity/Actor";
import { AppDataSource } from "../data-source";


export class ActorController{

static newActor = async (req: Request, res: Response) =>{

    const { email, 	nombres, apellidos, codigo, email_inst, tipo_doc, numero_doc, expedido_en, fecha_expedicion, sexo, est_civil, fecha_nac, pais_nac, departamento, municipio, celular } = req.body;

    const act = new Actor();

    

    act.email = email;
    act.nombres = nombres;
    act.apellidos = apellidos;
    act.codigo = codigo;
    act.email_inst = email_inst;
    act.tipo_doc = tipo_doc;
    act.numero_doc = numero_doc;
    act.expedido_en = expedido_en;
    act.fecha_expedicion = fecha_expedicion;
    act.sexo = sexo;
    act.est_civil = est_civil;
    act.fecha_nac = fecha_nac;
    act.pais_nac = pais_nac;
    act.email = email;
    act.departamento = departamento;
    act.municipio = municipio;
    act.celular = celular
    

    try {
        const actReporsitory = AppDataSource.getRepository(Actor);
        await actReporsitory.save(act);
    } catch (error) {
      console.log(error);
        return res.status(409).json({
            message:
              "Algo ha ido mal al intentar guardar el actor",
          });
    }

    return res.status(201).json({
        message:
          "Actor creado exitosamente!",
      });

}


static getDataActorByCodigo = async (req: Request, res: Response) => {
  const { codigo } = req.params;
  let idNum = parseInt(codigo);
  const actorReporsitory = AppDataSource.getRepository(Actor);
  try {
      const data = await actorReporsitory.find({
        relations: {
            movilidades: true,
        },where: {
          codigo: idNum
        }
    })
     
      if (data) {
          res.send(data);
        } else {
          res.status(404).json({
            message: "Usuario no encontrado",
          });
        }

  } catch (error) {
    console.log(error);
      res.status(404).json({
          message: "Sin resultados",error,
      });
  }


}
    
}