import { Router } from "express";
import { ConvenioController } from "../controller/ConvenioController";

const router = Router();

router.get("/", ConvenioController.getAgreements);
router.get("/summary", ConvenioController.getAgreementsData);
router.post("/", ConvenioController.createAgreement);
router.get("/:id", ConvenioController.getAgreement);
router.put("/:id", ConvenioController.updateAgreement);

export default router;
