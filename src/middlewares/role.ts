import { Request, Response, NextFunction } from "express";
import { User } from "../entity/User";
import { AppDataSource } from "../data-source";

export const checkRole = (roles: Array<string>) => {
  return async (req_Request, res: Response, next: NextFunction) => {
    const { userId } = res.locals.jwtPayload;
    const userRepository = AppDataSource.getRepository(User);
    let user: User;

    try {
      user = await userRepository.findOneOrFail({ where: { id: userId } });
    } catch (error) {
      res.status(401).json({
        message: "Error ubicando usuario",
      });
    }

    const { role } = user;

    if (roles.includes(role)) {
      next();
    } else {
      res.status(401).json({
        message: "Rol no autorizado para la operacion!",
      });
    }
  };
};
