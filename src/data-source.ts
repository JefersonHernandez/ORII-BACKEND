import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Facultad } from "./entity/Facultad";
import { Programa } from "./entity/Programa";
import { Actor } from "./entity/Actor";
import { MovilidadActor } from "./entity/MovilidadActor";



export const AppDataSource = new DataSource({
  type: "mysql",
  host: "host.docker.internal",
  port: 3306,
  username: "root",
  password: "",
  database: "ori-db",
  synchronize: false,
  logging: false,
  entities: [User,Facultad,Programa,Actor,MovilidadActor],
  migrations: [],
  subscribers: [],
});
