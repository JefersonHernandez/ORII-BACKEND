import { Router } from "express";
import { ProgramaInstitucionController } from "../controller/ProgramaInstitucionController";
import { checkJwt } from "../middlewares/JWT";
import { checkRole } from "../middlewares/role";

const router = Router();

router.get(
  "/grouped-by-institution",
  [checkJwt, checkRole(["admin"])],
  ProgramaInstitucionController.getProgramsGroupedByInstitution
);

router.get(
  "/grouped-by-institution/:id",
  [checkJwt, checkRole(["admin"])],
  ProgramaInstitucionController.getProgramGroupedByInstitution
);

router.put(
  "/:id",
  [checkJwt, checkRole(["admin"])],
  ProgramaInstitucionController.updateInstitutionProgram
);

router.get(
  "/:id",
  [checkJwt, checkRole(["admin"])],
  ProgramaInstitucionController.getProgramInstitution
);

router.get(
  "/",
  [checkJwt, checkRole(["admin"])],
  ProgramaInstitucionController.getAllProgramaInstitucions
);

router.post(
  "/",
  [checkJwt, checkRole(["admin"])],
  ProgramaInstitucionController.addInstitutionProgram
);

router.get(
  "/institucion/:id",
  [checkJwt, checkRole(["admin"])],
  ProgramaInstitucionController.getAllProgramaByInstitucion
);

export default router;
