import { Router } from "express";
import { ContactoController } from "../controller/ContactoController";
import { checkJwt } from "../middlewares/JWT";
import { checkRole } from "../middlewares/role";

const router = Router();

router.get(
  "/",
  [checkJwt, checkRole(["admin"])],
  ContactoController.getContacts
);

router.post(
  "/",
  [checkJwt, checkRole(["admin"])],
  ContactoController.createContact
);

router.get(
  "/:id",
  [checkJwt, checkRole(["admin"])],
  ContactoController.getContact
);

router.put(
  "/:id",
  [checkJwt, checkRole(["admin"])],
  ContactoController.updateContact
);

export default router;
