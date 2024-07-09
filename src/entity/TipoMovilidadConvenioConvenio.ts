import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Convenio } from "./Convenio";
import { TipoMovilidadConvenio } from "./TipoMovilidadConvenio";

@Entity()
export class TipoMovilidadConvenioConvenio {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => TipoMovilidadConvenio,
    (tipoMovilidadConvenio) =>
      tipoMovilidadConvenio.tipoMovilidadConvenioConvenios
  )
  @JoinColumn({ name: "tipo_movilidad_convenio_id" })
  tipoMovilidadConvenio: TipoMovilidadConvenio;

  @ManyToOne(() => Convenio, (convenio) => convenio.id)
  @JoinColumn({ name: "convenio_id" })
  convenio: Convenio;
}
