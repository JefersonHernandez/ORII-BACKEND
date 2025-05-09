import { Router } from "express";
import { DriveController } from "../controller/DriveController";

const router = Router();

router.get(
  "/files/international-agreements",
  DriveController.getInternationalAgreements
);
router.get("/files/national-agreements", DriveController.getNationalAgreements);
router.get("/files/:id", DriveController.getFile);

export default router;
