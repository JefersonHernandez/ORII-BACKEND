import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import config from "../config/config";

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  console.log("REQ->", req.headers);
  const token = <string>req.headers["auth"];
  let jwtPayload;

  try {
    jwtPayload = <any>jwt.verify(token, config.JWT_SECRET);
    res.locals.jwtPayload = jwtPayload;
  } catch (error) {
    return res.status(401).json({
      message: "Sin acceso, token vencido",
    });
  }

  const { userId, email } = jwtPayload;

  const newToken = jwt.sign({ userId, email }, config.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.setHeader("token", newToken);

  //call next
  next();
};
