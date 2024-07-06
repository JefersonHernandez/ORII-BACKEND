import { Router } from "express";
import { CountryController } from "../controller/CountryController";
const router = Router();

//Obtener los usuarios

router.get("/", CountryController.getPaises);

router.get("/codigos", CountryController.getCodigos);

export default router;
