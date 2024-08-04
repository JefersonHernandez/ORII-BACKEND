import { Router } from "express";
import { ProgramaController } from "../controller/ProgramaController";
const router = Router();

router.get("/", ProgramaController.getAllDataOfPrograms);
router.post("/", ProgramaController.addProgram);
// router.get("/:id", ProgramaController.getProgramById);
router.get("/:id", ProgramaController.getProgram);
router.put("/:id", ProgramaController.updateProgram);

export default router;
