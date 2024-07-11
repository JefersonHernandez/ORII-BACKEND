import { Router } from "express";
import { ProgramaInstitucionConvenioController } from "../controller/ProgramaInstitucionConvenioController";

const router = Router();

router.get(
  "/",
  ProgramaInstitucionConvenioController.getAllProgramaInstitucions
);

export default router;
