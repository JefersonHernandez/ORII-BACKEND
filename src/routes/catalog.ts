import { Router } from "express";
import { CatalogoController } from "../controller/CatalogoController";
import { checkJwt } from "../middlewares/JWT";
import { checkRole } from "../middlewares/role";

const router = Router();

//Obtener catalogo de Fuente De Financiación Nacional
router.get(
  "/source/national-financing",
  [checkJwt, checkRole(["admin"])],
  CatalogoController.getAllFuenteFinanciacionNacional
);

//Obtener catalogo de Fuente De Financiación Internacional
router.get(
  "/source/international-financing",
  [checkJwt, checkRole(["admin"])],
  CatalogoController.getAllFuenteFinanciacionInternacional
);

//Obtener catalogo de Tipo de documento
router.get(
  "/document-type",
  [checkJwt, checkRole(["admin"])],
  CatalogoController.getAllTipoDocumento
);

//Obtener catalogo de Estado Civil
router.get(
  "/civil-status",
  [checkJwt, checkRole(["admin"])],
  CatalogoController.getAllEstadoCivil
);

//Obtener catalogo de Tipo de Movilidad
router.get(
  "/mobility-type",
  [checkJwt, checkRole(["admin"])],
  CatalogoController.getAllTipoMovilidad
);

//Obtener catalogo de Modalidad de Movilidad
router.get(
  "/mobility-mode",
  [checkJwt, checkRole(["admin"])],
  CatalogoController.getAllModalidadMovilidad
);

//Obtener catalogo de Actividad
router.get(
  "/activity",
  [checkJwt, checkRole(["admin"])],
  CatalogoController.getAllActividad
);

//Obtener catalogo de Aplicacion de Movilidad
router.get(
  "/mobility-application",
  [checkJwt, checkRole(["admin"])],
  CatalogoController.getAllMobilityApplication
);

//Obtener catalogo de genero
router.get(
  "/gender",
  [checkJwt, checkRole(["admin"])],
  CatalogoController.getAllGenders
);

//Obtener catalogo de rol
router.get(
  "/rol",
  [checkJwt, checkRole(["admin"])],
  CatalogoController.getAllRols
);

//Obtener catalogo de semestre
router.get(
  "/semester",
  [checkJwt, checkRole(["admin"])],
  CatalogoController.getAllSemesters
);

//Obtener catalogo de fuentes de movilidad virtual
router.get(
  "/mobility-source",
  [checkJwt, checkRole(["admin"])],
  CatalogoController.getMobilitySources
);

export default router;
