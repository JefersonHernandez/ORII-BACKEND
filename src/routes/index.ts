import { Router } from "express";
import auth from "./auth";
import user from "./user";
import facultad from "./facultad";
import programa from "./programa";
import country from "./country";
import actor from "./actor";
import movilidad_actor from "./mov_actor";

const routes = Router();

routes.use("/auth", auth);

routes.use("/users", user);

routes.use("/facultad",facultad);

routes.use("/programas",programa);

routes.use("/paises",country);

routes.use("/actor", actor);

routes.use("/movilidad_actor", movilidad_actor);

export default routes;
