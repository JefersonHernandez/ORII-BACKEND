import { Router } from "express";
import { TipoMovilidadConvenioController } from "../controller/TipoMovilidadConvenioController";

const router = Router();

router.get("/", TipoMovilidadConvenioController.getTipoMovilidadConvenios);
router.get("/:id", TipoMovilidadConvenioController.getTipoMovilidadConvenio);

export default router;
