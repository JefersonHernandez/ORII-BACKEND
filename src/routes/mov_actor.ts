import { Router } from "express";
import { checkJwt } from "../middlewares/JWT";
import { checkRole } from "../middlewares/role";
import { ActorController } from "../controller/ActorController";
import { MovilidadController } from "../controller/MovilidadController";

const router = Router();


router.get("/recent", MovilidadController.getRecentMovility);
router.get("/", MovilidadController.getAllMovility);
router.get("/id/:id", MovilidadController.getDataMovilidadById);
router.get("/:codigo", MovilidadController.getDataMovilidadByCodigo);
router.post("/", MovilidadController.newMovilidad);


export default router;