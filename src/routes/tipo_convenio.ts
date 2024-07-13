import { Router } from "express";
import { TipoConvenioController } from "../controller/TipoConvenioController";

const router = Router();

router.get("/", TipoConvenioController.getTipoConvenios);
router.post("/", TipoConvenioController.add);
router.get("/:id", TipoConvenioController.getTipoConvenio);

export default router;
