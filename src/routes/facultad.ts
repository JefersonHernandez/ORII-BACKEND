import { Router } from "express";
import { FacultadController } from "../controller/FacultadController";
import { checkJwt } from "../middlewares/JWT";
import { checkRole } from "../middlewares/role";

const router = Router();

router.get(
  "/:id",
  [checkJwt, checkRole(["admin"])],
  FacultadController.getDataFacultadById
);

router.get(
  "/",
  [checkJwt, checkRole(["admin"])],
  FacultadController.getAllDataOfFacultad
);

export default router;
