import { Router } from "express";
import { ParametersController } from "../controller/ParametersController";

const router = Router();

router.get("/", ParametersController.getAppParameters);

export default router;
