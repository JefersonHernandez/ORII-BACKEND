import { Router } from "express";
import { ContactoController } from "../controller/ContactoController";

const router = Router();

router.get("/", ContactoController.getContacts);
router.post("/", ContactoController.createContact);
router.get("/:id", ContactoController.getContact);
router.put("/:id", ContactoController.updateContact);

export default router;
