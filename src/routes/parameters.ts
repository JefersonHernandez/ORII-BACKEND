import { Router } from "express";
import { ParametersController } from "../controller/ParametersController";
import { checkJwt } from "../middlewares/JWT";
import { checkRole } from "../middlewares/role";

const router = Router();

router.get(
  "/",
  [checkJwt, checkRole(["admin"])],
  ParametersController.getAppParameters
);

export default router;
