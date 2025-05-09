import { Router } from "express";
import { TipoMovilidadConvenioConvenioController } from "../controller/TipoMovilidadConvenioConvenioController";
import { checkJwt } from "../middlewares/JWT";
import { checkRole } from "../middlewares/role";

const router = Router();

router.get(
  "/",
  [checkJwt, checkRole(["admin"])],
  TipoMovilidadConvenioConvenioController.getTipoMovilidadConvenioConvenios
);

router.get(
  "/:id",
  [checkJwt, checkRole(["admin"])],
  TipoMovilidadConvenioConvenioController.getTipoMovilidadConvenioConvenio
);

export default router;
