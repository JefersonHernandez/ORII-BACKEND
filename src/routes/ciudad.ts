import { Router } from "express";
import { CiudadController } from "../controller/CiudadController";
import { checkJwt } from "../middlewares/JWT";
import { checkRole } from "../middlewares/role";

const router = Router();

router.get("/", [checkJwt, checkRole(["admin"])], CiudadController.getCities);

router.post("/", [checkJwt, checkRole(["admin"])], CiudadController.createCity);

router.get("/:id", [checkJwt, checkRole(["admin"])], CiudadController.getCity);

router.put(
  "/:id",
  [checkJwt, checkRole(["admin"])],
  CiudadController.updateCity
);

export default router;
