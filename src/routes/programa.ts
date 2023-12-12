import { Router } from "express";
import { UserController } from "../controller/UserController";
import { checkJwt } from "../middlewares/JWT";
import { checkRole } from "../middlewares/role";
import { ProgramaController } from "../controller/ProgramaController";
const router = Router();

//Obtener los usuarios



//Obtener datos de todos los programas

router.get("/", ProgramaController.getAllDataOfPrograms);

//Obtener datos de un programa especifico
router.get("/:id", ProgramaController.getProgramById);


export default router;