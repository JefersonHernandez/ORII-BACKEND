import "reflect-metadata";
import { DataSource } from "typeorm";
import config from "./config/config";
import { Actividad } from "./entity/Actividad";
import { Actor } from "./entity/Actor";
import { BaseCatalogEntity } from "./entity/BaseCatalogEntity ";
import { Ciudad } from "./entity/Ciudad";
import { Contacto } from "./entity/Contacto";
import { Convenio } from "./entity/Convenio";
import { EstadoCivil } from "./entity/EstadoCivil";
import { Facultad } from "./entity/Facultad";
import { FuenteFinanciacionInternacional } from "./entity/FuenteFinanciacionInternacional";
import { FuenteFinanciacionNacional } from "./entity/FuenteFinanciacionNacional";
import { Gender } from "./entity/Gender";
import { Institucion } from "./entity/Institucion";
import { MobilityApplication } from "./entity/MobilityApplication";
import { ModalidadMovilidad } from "./entity/ModalidadMovilidad";
import { MovilidadActor } from "./entity/MovilidadActor";
import { Pais } from "./entity/Pais";
import { Parameters } from "./entity/Parameters";
import { Programa } from "./entity/Programa";
import { ProgramaInstitucion } from "./entity/ProgramaInstitucion";
import { ProgramaInstitucionConvenio } from "./entity/ProgramaInstitucionConvenio";
import { Rol } from "./entity/Rol";
import { RolActividad } from "./entity/RolActividad";
import { Roles } from "./entity/Roles";
import { Semester } from "./entity/Semester";
import { TipoConvenio } from "./entity/TipoConvenio";
import { TipoDocumento } from "./entity/TipoDocumento";
import { TipoMovilidad } from "./entity/TipoMovilidad";
import { TipoMovilidadConvenio } from "./entity/TipoMovilidadConvenio";
import { TipoMovilidadConvenioConvenio } from "./entity/TipoMovilidadConvenioConvenio";
import { User } from "./entity/User";
import { UserRoles } from "./entity/UserRoles";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: config.MYSQL.HOST,
  port: config.MYSQL.PORT,
  username: config.MYSQL.USERNAME,
  password: config.MYSQL.PASSWORD,
  database: config.MYSQL.DATABASE,
  synchronize: false,
  logging: true,

  entities: [
    User,
    Facultad,
    Programa,
    Actor,
    MovilidadActor,
    BaseCatalogEntity,
    FuenteFinanciacionNacional,
    FuenteFinanciacionInternacional,
    TipoDocumento,
    EstadoCivil,
    TipoMovilidad,
    ModalidadMovilidad,
    Actividad,
    MobilityApplication,
    Gender,
    Rol,
    Semester,
    RolActividad,
    Pais,
    Convenio,
    Ciudad,
    Institucion,
    Contacto,
    Programa,
    TipoMovilidad,
    TipoMovilidadConvenio,
    TipoMovilidadConvenioConvenio,
    ProgramaInstitucion,
    ProgramaInstitucionConvenio,
    TipoConvenio,
    Parameters,
    Roles,
    UserRoles,
  ],
  migrations: [],
  subscribers: [],
});
