import { Router } from "express";
import { ConvenioController } from "../controller/ConvenioController";
const router = Router();

router.get("/", ConvenioController.getAgreements);
router.get("/summary", ConvenioController.getAgreementsData);
router.post("/", ConvenioController.createConvenio);
router.get("/:id", ConvenioController.getConvenio);

export default router;
