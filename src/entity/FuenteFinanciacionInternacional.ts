import { Entity, OneToMany } from "typeorm";
import { BaseCatalogEntity } from "./BaseCatalogEntity ";
import { MovilidadActor } from "./MovilidadActor";

@Entity()
export class FuenteFinanciacionInternacional extends BaseCatalogEntity {
  @OneToMany(() => MovilidadActor, (table) => table.international_financing)
  movilities: MovilidadActor[];
}
