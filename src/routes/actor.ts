import { Router } from "express";
import { checkJwt } from "../middlewares/JWT";
import { checkRole } from "../middlewares/role";
import { ActorController } from "../controller/ActorController";

const router = Router();

//Obtener los usuarios



//Obtener datos de una facultad especifica

router.get("/:codigo", ActorController.getDataActorByCodigo);


//Obtener datos de todas las facultades

router.post("/", ActorController.newActor);


export default router;