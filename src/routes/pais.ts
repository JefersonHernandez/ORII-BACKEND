import { Router } from "express";
import { PaisController } from "../controller/PaisController";
import { checkJwt } from "../middlewares/JWT";
import { checkRole } from "../middlewares/role";

const router = Router();

router.get("/", [checkJwt, checkRole(["admin"])], PaisController.getPaises);

router.post(
  "/",
  [checkJwt, checkRole(["admin"])],
  PaisController.createAgreementCountry
);

router.get(
  "/:id",
  [checkJwt, checkRole(["admin"])],
  PaisController.getAgreementCountry
);

router.put(
  "/:id",
  [checkJwt, checkRole(["admin"])],
  PaisController.updateAgreementCountry
);

export default router;
