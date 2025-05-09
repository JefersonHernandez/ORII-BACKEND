import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import config from "../config/config";

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  try {
    let jwtPayload;

    const authHeader = req.headers["authorization"] ?? "";

    const token = authHeader.split(" ")[1];

    jwtPayload = <any>jwt.verify(token, config.JWT_SECRET);

    res.locals.jwtPayload = jwtPayload;

    const { userId, email } = jwtPayload;

    const newToken = jwt.sign({ userId, email }, config.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.setHeader("token", newToken);

    next();
  } catch (error) {
    return res.status(401).json({
      message: "No access, token expired",
    });
  }
};
