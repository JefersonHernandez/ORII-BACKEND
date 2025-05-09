import { Entity, OneToMany } from "typeorm";
import { BaseCatalogEntity } from "./BaseCatalogEntity ";
import { MovilidadActor } from "./MovilidadActor";

@Entity()
export class Semester extends BaseCatalogEntity {
  @OneToMany(() => MovilidadActor, (table) => table.semester)
  movilities: MovilidadActor[];
}
