import { Router } from "express";
import { ProgramaInstitucionController } from "../controller/ProgramaInstitucionController";

const router = Router();

router.get(
  "/grouped-by-institution",
  ProgramaInstitucionController.getProgramsGroupedByInstitution
);

router.get(
  "/grouped-by-institution/:id",
  ProgramaInstitucionController.getProgramGroupedByInstitution
);

router.put("/:id", ProgramaInstitucionController.updateInstitutionProgram);
router.get("/:id", ProgramaInstitucionController.getProgramInstitution);
router.get("/", ProgramaInstitucionController.getAllProgramaInstitucions);
router.post("/", ProgramaInstitucionController.addInstitutionProgram);
router.get(
  "/institucion/:id",
  ProgramaInstitucionController.getAllProgramaByInstitucion
);

export default router;
