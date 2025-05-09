import { Router } from "express";
import { UserRolesController } from "../controller/UserRolesController";
// import { checkJwt } from "../middlewares/JWT";
// import { checkRole } from "../middlewares/role";

const router = Router();

router.get(
  "/",
  // [checkJwt, checkRole(["admin"])],
  UserRolesController.getUserRoles
);

export default router;
