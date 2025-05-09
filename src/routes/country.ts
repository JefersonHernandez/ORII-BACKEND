import { Router } from "express";
import { CountryController } from "../controller/CountryController";
import { checkJwt } from "../middlewares/JWT";
import { checkRole } from "../middlewares/role";

const router = Router();

router.get(
  "/codigos",
  [checkJwt, checkRole(["admin"])],
  CountryController.getCodigos
);

router.get("/", [checkJwt, checkRole(["admin"])], CountryController.getPaises);

export default router;
