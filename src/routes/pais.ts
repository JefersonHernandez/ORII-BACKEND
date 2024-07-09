import { Router } from "express";
import { PaisController } from "../controller/PaisController";

const router = Router();

router.get("/", PaisController.getPaises);
router.get("/:id", PaisController.getPais);

export default router;
