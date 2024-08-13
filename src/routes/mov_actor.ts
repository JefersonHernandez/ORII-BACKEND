import { Router } from "express";
import { MovilidadController } from "../controller/MovilidadController";

const router = Router();

router.get("/recent", MovilidadController.getRecentMovility);
router.get("/", MovilidadController.getAllMovility);
router.get("/id/:id", MovilidadController.getDataMovilidadById);
router.get("/:codigo", MovilidadController.getDataMovilidadByCodigo);
router.post("/", MovilidadController.newMovilidad);

export default router;
