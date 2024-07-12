import { Router } from "express";
import { ContactoController } from "../controller/ContactoController";

const router = Router();

router.get("/", ContactoController.getContactos);
router.post("/", ContactoController.insert);
router.get("/:id", ContactoController.getContacto);

export default router;
