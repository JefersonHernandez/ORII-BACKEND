import { Entity, OneToMany } from "typeorm";
import { Actor } from "./Actor";
import { BaseCatalogEntity } from "./BaseCatalogEntity ";

@Entity()
export class TipoDocumento extends BaseCatalogEntity {
  @OneToMany(() => Actor, (table) => table.document)
  actors: Actor[];
}
