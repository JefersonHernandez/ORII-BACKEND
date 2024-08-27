import { Router } from "express";
import actor from "./actor";
import auth from "./auth";
import calendar from "./calendar";
import catalog from "./catalog";
import ciudad from "./ciudad";
import contacto from "./contacto";
import convenio from "./convenio";
import country from "./country";
import drive from "./drive";
import facultad from "./facultad";
import institucion from "./institucion";
import movilidad_actor from "./mov_actor";
import pais from "./pais";
import parameters from "./parameters";
import programa from "./programa";
import programa_institucion from "./programa_institucion";
import programa_institucion_convenio from "./programa_institucion_convenio";
import rol_actividad from "./rol_actividad";
import roles from "./roles";
import tipo_convenio from "./tipo_convenio";
import tipo_movilidad_convenio from "./tipo_movilidad_convenio";
import tipo_movilidad_convenio_convenio from "./tipo_movilidad_convenio_convenio";
import user from "./user";
import user_roles from "./user_roles";

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

routes.use("/tipo_convenios", tipo_convenio);

routes.use("/tipo_movilidad_convenios", tipo_movilidad_convenio);

routes.use(
  "/tipo_movilidad_convenio_convenios",
  tipo_movilidad_convenio_convenio
);

routes.use("/programa_institucion", programa_institucion);

routes.use("/programa_institucion_convenio", programa_institucion_convenio);
routes.use("/convenio", convenio);
routes.use("/parameters", parameters);

routes.use("/institutions", institucion);

routes.use("/agreement-countries", pais);
routes.use("/cities", ciudad);
routes.use("/contacts", contacto);
routes.use("/roles", roles);
routes.use("/user_roles", user_roles);
routes.use("/calendar", calendar);
routes.use("/drive", drive);

export default routes;
