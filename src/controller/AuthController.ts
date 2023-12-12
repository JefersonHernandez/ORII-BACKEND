import { Request, Response } from "express";
import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
import config from "../config/config";
import * as jwt from "jsonwebtoken";
import { validate } from "class-validator";

class AuthController {
  static login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    if (!(email || password)) {
      return res.status(400).json({
        message: "Email y Contraseña son requeridos!",
      });
    }

    const userReporsitory = AppDataSource.getRepository(User);
    let user: User;

    try {
      user = await userReporsitory.findOneOrFail({
        where: { email: email },
      });
    } catch (e) {
      return res.status(400).json({
        message: "Email o Contraseña Incorrectas, verifique nuevamente!",
      });
    }

    //Check user

    if (!user.checkPassword(password)) {
      return res.status(400).json({
        message: "Email o contraseña estan incorrectos!",
      });
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      config.jwtSecret,
      { expiresIn: "1h" }
    );

    res.json({
      message: "Inicio de Sesion Exitoso",
      token: token,
      username: user.firstName+" "+user.lastName,
      userId: user.id,
      role: user.role,
    });
  };

  static changePassword = async (req: Request, res: Response) => {
    const { userId } = res.locals.jwtPayload;
    const { oldPassword, newPassword } = req.body;

    if (!(oldPassword && newPassword)) {
      return res.status(400).json({
        message: "Clave Anterior y Clave Nueva son requeridas",
      });
    }

    const userReporsitory = AppDataSource.getRepository(User);
    let user: User;

    try {
      user = await userReporsitory.findOneOrFail({
        where: { id: userId },
      });
    } catch (error) {
      res.status(400).json({
        message: "Algo ha ido mal",
      });
    }

    if (!user.checkPassword(oldPassword)) {
      return res.status(401).json({
        message: "Revisa tu clave anterior",
      });
    }

    user.password = newPassword;
    const validation = { validationError: { target: false, value: false } };
    const errors = await validate(user, validation);

    if (errors.length > 0) {
      return res.status(400).json(errors);
    }

    user.hashPassword();
    userReporsitory.save(user);

    res.json({
      message: "Clave cambiada de manera correcta!",
    });
  };
}

export default AuthController;
