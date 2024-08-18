import { Router } from "express";
import { ProgramaInstitucionConvenioController } from "../controller/ProgramaInstitucionConvenioController";
import { checkJwt } from "../middlewares/JWT";
import { checkRole } from "../middlewares/role";

const router = Router();

router.get(
  "/",
  [checkJwt, checkRole(["admin"])],
  ProgramaInstitucionConvenioController.getAllProgramaInstitucions
);

export default router;
