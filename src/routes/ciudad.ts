import { Router } from "express";
import { CiudadController } from "../controller/CiudadController";

const router = Router();

router.get("/", CiudadController.getCities);
router.post("/", CiudadController.createCity);
router.get("/:id", CiudadController.getCity);
router.put("/:id", CiudadController.updateCity);

export default router;
