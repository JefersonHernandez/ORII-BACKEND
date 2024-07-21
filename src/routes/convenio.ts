import { Router } from "express";
import { ConvenioController } from "../controller/ConvenioController";
const router = Router();

router.get("/", ConvenioController.getConvenios);
router.post("/", ConvenioController.createConvenio);
router.get("/:id", ConvenioController.getConvenio);

export default router;
