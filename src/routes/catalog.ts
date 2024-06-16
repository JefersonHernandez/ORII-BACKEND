import { Router } from "express";
import { checkJwt } from "../middlewares/JWT";
import { checkRole } from "../middlewares/role";
import { CatalogoController } from "../controller/CatalogoController";
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

export default router;
