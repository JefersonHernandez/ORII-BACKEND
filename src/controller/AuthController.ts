import { validate } from "class-validator";
import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import config from "../config/config";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

class AuthController {
  static readonly login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!(email || password)) {
      throw new Error("Email and Password are required!");
    }

    const reporsitory = AppDataSource.getRepository(User);

    try {
      let user = await reporsitory.findOneOrFail({
        where: { email: email },
      });

      if (!user.checkPassword(password)) {
        throw new Error("Email or password are incorrect!");
      }

      const token = jwt.sign(
        { userId: user.id, email: user.email },
        config.JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.json({ id: user.id, token, role: "staff" });
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
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
