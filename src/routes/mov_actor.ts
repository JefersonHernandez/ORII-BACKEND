import { Router } from "express";
import { MovilidadController } from "../controller/MovilidadController";
import { checkJwt } from "../middlewares/JWT";
import { checkRole } from "../middlewares/role";

const router = Router();

router.get(
  "/recent",
  [checkJwt, checkRole(["admin"])],
  MovilidadController.getRecentMovility
);

router.get(
  "/",
  [checkJwt, checkRole(["admin"])],
  MovilidadController.getAllMovility
);

router.get(
  "/:id",
  [checkJwt, checkRole(["admin"])],
  MovilidadController.getDataMovilidadById
);

// router.get(
//   "/:codigo",
//   [checkJwt, checkRole(["admin"])],
//   MovilidadController.getDataMovilidadByCodigo
// );

router.post(
  "/",
  [checkJwt, checkRole(["admin"])],
  MovilidadController.newMovilidad
);

router.put(
  "/:id",
  [checkJwt, checkRole(["admin"])],
  MovilidadController.updateMovilidad
);

export default router;
