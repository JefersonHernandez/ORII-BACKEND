import { Router } from "express";
import { RolActividadController } from "../controller/RolActividadController";

const router = Router();

router.get("/:id", RolActividadController.getAllActivityByRol);

export default router;
