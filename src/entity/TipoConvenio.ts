import { Entity, OneToMany } from "typeorm";
import { BaseCatalogEntity } from "./BaseCatalogEntity ";
import { Convenio } from "./Convenio";

@Entity()
export class TipoConvenio extends BaseCatalogEntity {
  @OneToMany(() => Convenio, (convenio) => convenio.id)
  convenios: Convenio[];
}
