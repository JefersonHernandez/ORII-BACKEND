import "reflect-metadata";
import { DataSource } from "typeorm";
import config from "./config/config";
import { Actividad } from "./entity/Actividad";
import { Actor } from "./entity/Actor";
import { BaseCatalogEntity } from "./entity/BaseCatalogEntity ";
import { EstadoCivil } from "./entity/EstadoCivil";
import { Facultad } from "./entity/Facultad";
import { FuenteFinanciacionInternacional } from "./entity/FuenteFinanciacionInternacional";
import { FuenteFinanciacionNacional } from "./entity/FuenteFinanciacionNacional";
import { Gender } from "./entity/Gender";
import { MobilityApplication } from "./entity/MobilityApplication";
import { ModalidadMovilidad } from "./entity/ModalidadMovilidad";
import { MovilidadActor } from "./entity/MovilidadActor";
import { Programa } from "./entity/Programa";
import { Rol } from "./entity/Rol";
import { RolActividad } from "./entity/RolActividad";
import { Semester } from "./entity/Semester";
import { TipoDocumento } from "./entity/TipoDocumento";
import { TipoMovilidad } from "./entity/TipoMovilidad";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: config.MYSQL.HOST,
  port: config.MYSQL.PORT,
  username: config.MYSQL.USERNAME,
  password: config.MYSQL.PASSWORD,
  database: config.MYSQL.DATABASE,
  synchronize: false,
  logging: false,
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
  ],
  migrations: [],
  subscribers: [],
});
