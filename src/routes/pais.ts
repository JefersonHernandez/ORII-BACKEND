import { Router } from "express";
import { PaisController } from "../controller/PaisController";

const router = Router();

router.get("/", PaisController.getPaises);
router.post("/", PaisController.insertPais);
router.get("/:id", PaisController.getPais);

export default router;
