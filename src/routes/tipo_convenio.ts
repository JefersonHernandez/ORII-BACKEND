import { Router } from "express";
import { TipoConvenioController } from "../controller/TipoConvenioController";
import { checkJwt } from "../middlewares/JWT";
import { checkRole } from "../middlewares/role";

const router = Router();

router.get(
  "/",
  [checkJwt, checkRole(["admin"])],
  TipoConvenioController.getTipoConvenios
);

router.post("/", [checkJwt, checkRole(["admin"])], TipoConvenioController.add);

router.get(
  "/:id",
  [checkJwt, checkRole(["admin"])],
  TipoConvenioController.getTipoConvenio
);

export default router;
