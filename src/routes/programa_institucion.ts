import { Router } from "express";
import { ProgramaInstitucionController } from "../controller/ProgramaInstitucionController";

const router = Router();

router.get(
  "/institucion/:id",
  ProgramaInstitucionController.getAllProgramaByInstitucion
);
router.get("/", ProgramaInstitucionController.getAllProgramaInstitucions);

export default router;
