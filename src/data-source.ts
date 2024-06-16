import "reflect-metadata";
import config from "./config/config";
import { DataSource } from "typeorm";
import { Actor } from "./entity/Actor";
import { Facultad } from "./entity/Facultad";
import { MovilidadActor } from "./entity/MovilidadActor";
import { Programa } from "./entity/Programa";
import { User } from "./entity/User";
import { BaseCatalogEntity } from "./entity/BaseCatalogEntity ";
import { FuenteFinanciacionNacional } from "./entity/FuenteFinanciacionNacional";
import { FuenteFinanciacionInternacional } from "./entity/FuenteFinanciacionInternacional";
import { TipoDocumento } from "./entity/TipoDocumento";
import { EstadoCivil } from "./entity/EstadoCivil";
import { TipoMovilidad } from "./entity/TipoMovilidad";
import { ModalidadMovilidad } from "./entity/ModalidadMovilidad";
import { Actividad } from "./entity/Actividad";

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
  ],
  migrations: [],
  subscribers: [],
});
