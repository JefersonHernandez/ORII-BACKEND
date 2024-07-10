import { Router } from "express";
import { TipoMovilidadConvenioConvenioController } from "../controller/TipoMovilidadConvenioConvenioController";

const router = Router();

router.get(
  "/",
  TipoMovilidadConvenioConvenioController.getTipoMovilidadConvenioConvenios
);
router.get(
  "/:id",
  TipoMovilidadConvenioConvenioController.getTipoMovilidadConvenioConvenio
);

export default router;
