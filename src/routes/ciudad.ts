import { Router } from "express";
import { CiudadController } from "../controller/CiudadController";

const router = Router();

router.get("/", CiudadController.getCiudades);
router.get("/:id", CiudadController.getCiudad);

export default router;
