import "reflect-metadata";
import { DataSource } from "typeorm";
import { Actor } from "./entity/Actor";
import { Facultad } from "./entity/Facultad";
import { MovilidadActor } from "./entity/MovilidadActor";
import { Programa } from "./entity/Programa";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "ori-db.cpi15s7eozdu.us-east-1.rds.amazonaws.com",
  port: 3306,
  username: "admin",
  password: "o2BKuYhDKbekUnbMX7eu",
  database: "ori-db",
  synchronize: false,
  logging: false,
  entities: [User, Facultad, Programa, Actor, MovilidadActor],
  migrations: [],
  subscribers: [],
});
