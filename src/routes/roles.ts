import { Router } from "express";
import { RolesController } from "../controller/RolesController";
import { checkJwt } from "../middlewares/JWT";
import { checkRole } from "../middlewares/role";

const router = Router();

router.get("/", [checkJwt, checkRole(["admin"])], RolesController.getRoles);

export default router;
