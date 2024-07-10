import { Router } from "express";
import { ProgramaInstitucionController } from "../controller/ProgramaInstitucionController";

const router = Router();

router.get("/", ProgramaInstitucionController.getAllProgramaInstitucions);

export default router;
