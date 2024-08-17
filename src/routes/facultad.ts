import { Router } from "express";
import { FacultadController } from "../controller/FacultadController";

const router = Router();

router.get("/:id", FacultadController.getDataFacultadById);

router.get("/", FacultadController.getAllDataOfFacultad);

export default router;
