import { Entity, OneToMany } from "typeorm";
import { BaseCatalogEntity } from "./BaseCatalogEntity ";
import { MovilidadActor } from "./MovilidadActor";

@Entity()
export class FuenteFinanciacionNacional extends BaseCatalogEntity {
  @OneToMany(() => MovilidadActor, (table) => table.national_financing)
  movilities: MovilidadActor[];
}
