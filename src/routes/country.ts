import { Router } from "express";
import { UserController } from "../controller/UserController";
import { checkJwt } from "../middlewares/JWT";
import { checkRole } from "../middlewares/role";
import { CountryController } from "../controller/CountryController";
const router = Router();

//Obtener los usuarios




router.get("/", CountryController.getPaises);

router.get("/codigos", CountryController.getCodigos);


export default router;