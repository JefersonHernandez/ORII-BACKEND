import { Router } from "express";
import { TipoMovilidadConvenioController } from "../controller/TipoMovilidadConvenioController";
import { checkJwt } from "../middlewares/JWT";
import { checkRole } from "../middlewares/role";

const router = Router();

router.get(
  "/",
  [checkJwt, checkRole(["admin"])],
  TipoMovilidadConvenioController.getTipoMovilidadConvenios
);

router.post(
  "/",
  [checkJwt, checkRole(["admin"])],
  TipoMovilidadConvenioController.addAgreementMobility
);

router.put(
  "/:id",
  [checkJwt, checkRole(["admin"])],
  TipoMovilidadConvenioController.updateAgreementMobility
);

router.get(
  "/:id",
  [checkJwt, checkRole(["admin"])],
  TipoMovilidadConvenioController.getAgreementMobility
);

export default router;
