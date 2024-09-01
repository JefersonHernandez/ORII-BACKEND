import { Router } from "express";
import { ActorController } from "../controller/ActorController";
import { checkJwt } from "../middlewares/JWT";
import { checkRole } from "../middlewares/role";

const router = Router();

router.get("/", [checkJwt, checkRole(["admin"])], ActorController.getActors);

router.get(
  "/:codigo",
  [checkJwt, checkRole(["admin"])],
  ActorController.getDataActorByCodigo
);

router.post("/", [checkJwt, checkRole(["admin"])], ActorController.newActor);
router.put(
  "/:codigo",
  [checkJwt, checkRole(["admin"])],
  ActorController.updateActor
);

export default router;
