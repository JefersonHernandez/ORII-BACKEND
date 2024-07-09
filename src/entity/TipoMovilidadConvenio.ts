import { Entity, OneToMany } from "typeorm";
import { BaseCatalogEntity } from "./BaseCatalogEntity ";
import { TipoMovilidadConvenioConvenio } from "./TipoMovilidadConvenioConvenio";

@Entity()
export class TipoMovilidadConvenio extends BaseCatalogEntity {
  @OneToMany(
    () => TipoMovilidadConvenioConvenio,
    (tipoMovilidadConvenioConvenio) => tipoMovilidadConvenioConvenio.id
  )
  tipoMovilidadConvenioConvenios: TipoMovilidadConvenioConvenio[];
}
