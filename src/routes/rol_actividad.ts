import { Router } from "express";
import { RolActividadController } from "../controller/RolActividadController";
import { checkJwt } from "../middlewares/JWT";
import { checkRole } from "../middlewares/role";

const router = Router();

router.get(
  "/:id",
  [checkJwt, checkRole(["admin"])],
  RolActividadController.getAllActivityByRol
);

export default router;
