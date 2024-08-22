import { Router } from "express";
import { ConvenioController } from "../controller/ConvenioController";
import { checkJwt } from "../middlewares/JWT";
import { checkRole } from "../middlewares/role";

const router = Router();

router.get(
  "/",
  [checkJwt, checkRole(["admin"])],
  ConvenioController.getAgreements
);

router.post(
  "/",
  [checkJwt, checkRole(["admin"])],
  ConvenioController.createAgreement
);

router.get(
  "/:id",
  [checkJwt, checkRole(["admin"])],
  ConvenioController.getAgreement
);

router.put(
  "/:id",
  [checkJwt, checkRole(["admin"])],
  ConvenioController.updateAgreement
);

export default router;
