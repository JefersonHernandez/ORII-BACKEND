import { Router } from "express";
import { UserController } from "../controller/UserController";
import { checkJwt } from "../middlewares/JWT";
import { checkRole } from "../middlewares/role";
const router = Router();

//Obtener los usuarios

router.get("/", [checkJwt, checkRole(["admin"])], UserController.getAll);

//Obtener un usuario en especifico

router.get("/:id", [checkJwt, checkRole(["admin"])], UserController.getById);

//crear nuevo usuario

router.post("/", UserController.newUser);

//editar usuario

router.patch("/:id", [checkJwt, checkRole(["admin"])], UserController.editUser);

//eliminar usuario

router.delete(
  "/:id",
  [checkJwt, checkRole(["admin"])],
  UserController.deleteUser
);

export default router;
