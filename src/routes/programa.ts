import { Router } from "express";
import { ProgramaController } from "../controller/ProgramaController";
import { checkJwt } from "../middlewares/JWT";
import { checkRole } from "../middlewares/role";

const router = Router();

router.get(
  "/by-faculty/:id",
  [checkJwt, checkRole(["admin"])],
  ProgramaController.getProgramsByFaculty
);

router.get(
  "/",
  [checkJwt, checkRole(["admin"])],
  ProgramaController.getAllDataOfPrograms
);

router.post(
  "/",
  [checkJwt, checkRole(["admin"])],
  ProgramaController.addProgram
);

router.get(
  "/:id",
  [checkJwt, checkRole(["admin"])],
  ProgramaController.getProgram
);

router.put(
  "/:id",
  [checkJwt, checkRole(["admin"])],
  ProgramaController.updateProgram
);

export default router;
