import { Router } from "express";
import { InstitucionController } from "../controller/InstitucionController";

const router = Router();

router.get("/", InstitucionController.getInstituciones);
router.get("/:id", InstitucionController.getInstitucion);

export default router;
