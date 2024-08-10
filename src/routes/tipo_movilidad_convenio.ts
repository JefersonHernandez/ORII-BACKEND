import { Router } from "express";
import { TipoMovilidadConvenioController } from "../controller/TipoMovilidadConvenioController";

const router = Router();

router.get("/", TipoMovilidadConvenioController.getTipoMovilidadConvenios);
router.post("/", TipoMovilidadConvenioController.addAgreementMobility);
router.put("/:id", TipoMovilidadConvenioController.updateAgreementMobility);
router.get("/:id", TipoMovilidadConvenioController.getAgreementMobility);

export default router;
