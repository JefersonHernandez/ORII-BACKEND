import { Router } from "express";
import { InstitucionController } from "../controller/InstitucionController";

const router = Router();

router.get("/", InstitucionController.getInstitutions);
router.get("/convenios", InstitucionController.getInstitucionesForConvenios);

router.post("/", InstitucionController.createInstitution);
router.get("/:id", InstitucionController.getInstitution);
router.put("/:id", InstitucionController.updateInstitution);

export default router;
