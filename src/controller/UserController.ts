import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";
import { validate } from "class-validator";

export class UserController {
  static getAll = async (req: Request, res: Response) => {
    const userRepository = AppDataSource.getRepository(User);

    try {
      const users = await userRepository.find();
    } catch (error) {
      res.status(404).json({ message: error });
    }

    const users = await userRepository.find();

    if (users.length > 0) {
      res.send(users);
    } else {
      res.status(404).json({
        message: "Usuarios no encontrados",
      });
    }
  };

  static getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    let idNum = parseInt(id);
    const userReporsitory = AppDataSource.getRepository(User);

    try {
      const user = await userReporsitory.findOneBy({
        id: idNum,
      });

      if (user) {
        res.send(user);
      } else {
        res.status(404).json({
          message: "Usuario no encontrado",
        });
      }
    } catch (error) {
      res.status(404).json({
        message: "No hay resultados",
      });
    }
  };

  static newUser = async (req: Request, res: Response) => {
    const { email, password, role } = req.body;

    const user = new User();

    user.email = email;
    user.password = password;
    user.role = role;

    //validate

    const errors = await validate(user, {
      validationError: { target: false, value: false },
    });

    if (errors.length > 0) {
      return res.status(400).json({
        message: errors,
      });
    }

    //Hash Password

    const userReporsitory = AppDataSource.getRepository(User);

    try {
      user.hashPassword();
      await userReporsitory.save(user);
    } catch (e) {
      return res.status(409).json({
        message:
          "Email ya existe en nuestra base de datos, elija otro por favor",
      });
    }
    res.send("Usuario Creado Exitosamente!");
  };

  static editUser = async (req: Request, res: Response) => {
    let user;
    const { id } = req.params;
    let idNum = parseInt(id);
    const { email, role } = req.body;

    const userReporsitory = AppDataSource.getRepository(User);

    try {
      user = await userReporsitory.findOneBy({
        id: idNum,
      });

      user.email = email;
      user.role = role;
    } catch (e) {
      return res.status(404).json({
        message: "Usuario no encontrado",
      });
    }

    const errors = validate(user, {
      validationError: { target: false, value: false },
    });

    if ((await errors).length > 0) {
      return res.status(400).json({
        message: errors,
      });
    }

    // try to update

    try {
      await userReporsitory.save(user);
    } catch (error) {
      return res.status(409).json({
        message: "Error al intentar actualizar, email ya esta en uso",
      });
    }

    res.status(201).json({
      message: "Usuario actualizado correctamente!",
    });
  };

  static deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    let idNum = parseInt(id);
    const userReporsitory = AppDataSource.getRepository(User);

    let user: User;

    try {
      user = await userReporsitory.findOneBy({
        id: idNum,
      });
    } catch (e) {
      return res.status(404).json({
        message: "Usuario no encontrado",
      });
    }

    if (user) {
      userReporsitory.delete(idNum);
      res.status(201).json({
        message: "Usuario eliminado correctamente!",
      });
    } else {
      res.status(404).json({
        message: "Usuario no encontrado",
      });
    }
  };
}

export default UserController;
