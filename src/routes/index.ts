import { Router } from "express";
import actor from "./actor";
import auth from "./auth";
import catalog from "./catalog";
import country from "./country";
import facultad from "./facultad";
import movilidad_actor from "./mov_actor";
import programa from "./programa";
import rol_actividad from "./rol_actividad";
import user from "./user";

const routes = Router();

routes.use("/auth", auth);

routes.use("/users", user);

routes.use("/facultad", facultad);

routes.use("/programas", programa);

routes.use("/paises", country);

routes.use("/actor", actor);

routes.use("/movilidad_actor", movilidad_actor);

routes.use("/catalog", catalog);

routes.use("/rol_actividad", rol_actividad);

export default routes;
