import { Request, Response } from "express";
import { Actor } from "../entity/Actor";
import { AppDataSource } from "../data-source";
import { MovilidadActor } from "../entity/MovilidadActor";
import { Between } from "typeorm";


export class MovilidadController{

static newMovilidad = async (req: Request, res: Response) =>{

  const { tipo_mov, clase_mov, facultad, programa, anio_mov, semestre_mov, actividad_mov, descrip_act_mov, inst_origen, direccion_origen, pais_origen, depart_origen, municipio_origen, inst_destino, direccion_destino, pais_destino, depart_destino,
    municipio_destino, numero_dias_mov, mov_convenio, fuent_fin_nacional, valor_fin_nacional, fuent_fin_internacional, pais_fin_internacional, valor_fin_internacional, codigo_actor, rol, numero_convenio_mov} = req.body;
    const mov = new MovilidadActor();

    mov.tipo_mov = tipo_mov;
    mov.clase_mov = clase_mov;
    mov.facultad = facultad;
    mov.programa= programa;
    mov.anio_mov= anio_mov;
    mov.semestre_mov= semestre_mov;
    mov.actividad_mov= actividad_mov;
    mov.descrip_act_mov= descrip_act_mov;
    mov.inst_origen= inst_origen;
    mov.direccion_origen= direccion_origen;
    mov.pais_origen= pais_origen;
    mov.depart_origen= depart_origen;
    mov.municipio_origen= municipio_origen;
    mov.inst_destino= inst_destino;
    mov.direccion_destino= direccion_destino;
    mov.pais_destino= pais_destino;
    mov.depart_destino= depart_destino;
    mov.municipio_destino= municipio_destino;
    mov.numero_dias_mov= numero_dias_mov;
    mov.mov_convenio= mov_convenio;
    mov.fuent_fin_nacional= fuent_fin_nacional;
    mov.valor_fin_nacional= valor_fin_nacional;
    mov.fuent_fin_internacional= fuent_fin_internacional;
    mov.pais_fin_internacional= pais_fin_internacional;
    mov.valor_fin_internacional= valor_fin_internacional;
    mov.codigo_actor= codigo_actor;
    mov.rol = rol;
    mov.numero_convenio_mov = numero_convenio_mov;


    

    

    try {
        const movReporsitory = AppDataSource.getRepository(MovilidadActor);
        await movReporsitory.save(mov);
    } catch (error) {

      console.log(error);
        return res.status(409).json({
            message:
              "Algo ha ido mal al intentar guardar la movilidad",
          });
    }

    return res.status(201).json({
        message:
          "Movilidad creada exitosamente!",
      });

}


static getDataMovilidadByCodigo = async (req: Request, res: Response) => {
  const { codigo } = req.params;
  let idNum = parseInt(codigo);
  const movilidadReporsitory = AppDataSource.getRepository(MovilidadActor);
  try {
      const data = await movilidadReporsitory.find({
        relations: {
            actor: true,
        },where: {
          codigo_actor: idNum
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
      res.status(404).json({
          message: "Sin resultados",error,
      });
  }


}

static getDataMovilidadById = async (req: Request, res: Response) => {
  const { id } = req.params;
  let idNum = parseInt(id);
  const movilidadReporsitory = AppDataSource.getRepository(MovilidadActor);
  try {
      const data = await movilidadReporsitory.find({
        relations: {
            actor: true,
        },where: {
          id: idNum
        }
    })
     
      if (data) {
          res.send(data);
        } else {
          res.status(404).json({
            message: "Movilidad no encontrada",
          });
        }

  } catch (error) {
      res.status(404).json({
          message: "Sin resultados",error,
      });
  }


}


static getRecentMovility = async (req: Request, res: Response) =>{
  const tiempoTranscurrido = Date.now();
  const fechaFinal = new Date(tiempoTranscurrido);
const fechaInicial = new Date(tiempoTranscurrido-550000000);

console.log(fechaInicial);
console.log(fechaFinal);

  const movilidadReporsitory = AppDataSource.getRepository(MovilidadActor);
  try {
      const data = await movilidadReporsitory.find({
        relations: {
            actor: true,
        },where: {
          createdAt: Between(
              fechaInicial, 
              fechaFinal
          ),
    },order: {
      createdAt: 'DESC',
    }
  });
     
      if (data) {
        console.log("Data es", data)
          res.send(data);
        } else {
          res.status(404).json({
            message: "Modalidad no encontrada",
          });
        }

  } catch (error) {
      res.status(404).json({
          message: "Sin resultados",error,
      });
  }


}

static getAllMovility = async (req: Request, res: Response) =>{


  const movilidadReporsitory = AppDataSource.getRepository(MovilidadActor);
  try {
      const data = await movilidadReporsitory.find({
        relations: {
            actor: true,
        },order: {
      createdAt: 'DESC',
    }
  });
     
      if (data) {
          res.send(data);
        } else {
          res.status(404).json({
            message: "Modalidades no encontradas",
          });
        }

  } catch (error) {
      res.status(404).json({
          message: "Sin resultados",error,
      });
  }


}
    
}