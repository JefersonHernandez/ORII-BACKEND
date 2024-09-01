import { Entity, OneToMany } from "typeorm";
import { BaseCatalogEntity } from "./BaseCatalogEntity ";
import { MovilidadActor } from "./MovilidadActor";

@Entity()
export class VirtualMobilitySource extends BaseCatalogEntity {
  @OneToMany(() => MovilidadActor, (table) => table.mobility_source)
  movilities: MovilidadActor[];
}
