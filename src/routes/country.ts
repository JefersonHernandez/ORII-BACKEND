import { Router } from "express";
import { CountryController } from "../controller/CountryController";
import { checkJwt } from "../middlewares/JWT";
import { checkRole } from "../middlewares/role";
const router = Router();

//Obtener los usuarios

router.get("/", [checkJwt, checkRole(["admin"])], CountryController.getPaises);

router.get(
  "/codigos",
  [checkJwt, checkRole(["admin"])],
  CountryController.getCodigos
);

export default router;
