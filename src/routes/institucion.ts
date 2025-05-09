import { Router } from "express";
import { InstitucionController } from "../controller/InstitucionController";
import { checkJwt } from "../middlewares/JWT";
import { checkRole } from "../middlewares/role";

const router = Router();

router.get(
  "/international",
  [checkJwt, checkRole(["admin"])],
  InstitucionController.getInternationalInstitutions
);

router.get(
  "/",
  [checkJwt, checkRole(["admin"])],
  InstitucionController.getInstitutions
);

router.get(
  "/convenios",
  [checkJwt, checkRole(["admin"])],
  InstitucionController.getInstitucionesForConvenios
);

router.post(
  "/",
  [checkJwt, checkRole(["admin"])],
  InstitucionController.createInstitution
);

router.get(
  "/:id",
  [checkJwt, checkRole(["admin"])],
  InstitucionController.getInstitution
);

router.put(
  "/:id",
  [checkJwt, checkRole(["admin"])],
  InstitucionController.updateInstitution
);

export default router;
