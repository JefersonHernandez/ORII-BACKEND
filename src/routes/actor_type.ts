import { Router } from "express";
import { ActorTypeController } from "../controller/ActorTypeController";
import { checkJwt } from "../middlewares/JWT";
import { checkRole } from "../middlewares/role";

const router = Router();

router.get(
  "/",
  [checkJwt, checkRole(["admin"])],
  ActorTypeController.getActorTypes
);

export default router;
