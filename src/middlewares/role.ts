import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export const checkRole = (roles: Array<string>) => {
  return async (_: Request, res: Response, next: NextFunction) => {
    try {
      const { userId } = res.locals.jwtPayload;

      const userRepository = AppDataSource.getRepository(User);

      let user: User;

      user = await userRepository.findOneOrFail({ where: { id: userId } });

      const { role } = user;

      if (!roles.includes(role)) {
        throw new Error("Unauthorized role for the operation!");
      }

      next();
    } catch (error) {
      res.status(401).json({
        message: error.message,
      });
    }
  };
};
