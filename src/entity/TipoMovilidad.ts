import { Entity, OneToMany } from "typeorm";
import { BaseCatalogEntity } from "./BaseCatalogEntity ";
import { MovilidadActor } from "./MovilidadActor";

@Entity()
export class TipoMovilidad extends BaseCatalogEntity {
  @OneToMany(() => MovilidadActor, (table) => table.movility_type)
  movilities: MovilidadActor[];
}
