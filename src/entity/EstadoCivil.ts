import { Entity, OneToMany } from "typeorm";
import { Actor } from "./Actor";
import { BaseCatalogEntity } from "./BaseCatalogEntity ";

@Entity()
export class EstadoCivil extends BaseCatalogEntity {
  @OneToMany(() => Actor, (table) => table.marital_status)
  actors: Actor[];
}
