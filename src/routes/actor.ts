import { Router } from "express";
import { ActorController } from "../controller/ActorController";
import { checkJwt } from "../middlewares/JWT";
import { checkRole } from "../middlewares/role";

const router = Router();

//Obtener los usuarios

//Obtener datos de una facultad especifica

router.get(
  "/:codigo",
  [checkJwt, checkRole(["admin"])],
  ActorController.getDataActorByCodigo
);

//Obtener datos de todas las facultades

router.post("/", [checkJwt, checkRole(["admin"])], ActorController.newActor);

export default router;
