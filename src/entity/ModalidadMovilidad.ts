import { Entity, OneToMany } from "typeorm";
import { BaseCatalogEntity } from "./BaseCatalogEntity ";
import { MovilidadActor } from "./MovilidadActor";

@Entity()
export class ModalidadMovilidad extends BaseCatalogEntity {
  @OneToMany(() => MovilidadActor, (table) => table.mobility_class)
  movilities: MovilidadActor[];
}
