import { Router } from "express";
import { ProgramaInstitucionController } from "../controller/ProgramaInstitucionController";

const router = Router();

router.get("/", ProgramaInstitucionController.getAllProgramaInstitucions);
router.post("/", ProgramaInstitucionController.addProgramaInstitucion);
router.get(
  "/institucion/:id",
  ProgramaInstitucionController.getAllProgramaByInstitucion
);

export default router;
