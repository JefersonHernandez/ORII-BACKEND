import { Router } from "express";
import { PaisController } from "../controller/PaisController";

const router = Router();

router.get("/", PaisController.getPaises);
router.post("/", PaisController.createAgreementCountry);
router.get("/:id", PaisController.getAgreementCountry);
router.put("/:id", PaisController.updateAgreementCountry);

export default router;
