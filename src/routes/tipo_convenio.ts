import { Router } from "express";
import { TipoConvenioController } from "../controller/TipoConvenioController";

const router = Router();

router.get("/", TipoConvenioController.getTipoConvenios);
router.get("/:id", TipoConvenioController.getTipoConvenio);

export default router;
