import { Entity, OneToMany } from "typeorm";
import { BaseCatalogEntity } from "./BaseCatalogEntity ";
import { MovilidadActor } from "./MovilidadActor";

@Entity()
export class MobilityApplication extends BaseCatalogEntity {
  @OneToMany(() => MovilidadActor, (table) => table.mobility_application)
  movilities: MovilidadActor[];
}
