import { Router } from "express";
import { UserController } from "../controller/UserController";
import { checkJwt } from "../middlewares/JWT";
import { checkRole } from "../middlewares/role";
import { FacultadController } from "../controller/FacultadController";
const router = Router();

//Obtener los usuarios



//Obtener datos de una facultad especifica

router.get("/:id", FacultadController.getDataFacultadById);


//Obtener datos de todas las facultades

router.get("/", FacultadController.getAllDataOfFacultad);


export default router;