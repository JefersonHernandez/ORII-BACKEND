import { Router } from "express";
import { ProgramaController } from "../controller/ProgramaController";
const router = Router();

//Obtener los usuarios

//Obtener datos de todos los programas

router.get("/", ProgramaController.getAllDataOfPrograms);
router.post("/", ProgramaController.createPrograma);

//Obtener datos de un programa especifico
router.get("/:id", ProgramaController.getProgramById);

export default router;
