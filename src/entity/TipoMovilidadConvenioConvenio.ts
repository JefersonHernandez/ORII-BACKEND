import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Convenio } from "./Convenio";
import { TipoMovilidadConvenio } from "./TipoMovilidadConvenio";

@Entity()
export class TipoMovilidadConvenioConvenio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  convenio_id: number;

  @Column()
  tipo_movilidad_convenio_id: number;

  @ManyToOne(
    () => TipoMovilidadConvenio,
    (table) => table.tipoMovilidadConvenioConvenios
  )
  @JoinColumn({ name: "tipo_movilidad_convenio_id" })
  tipoMovilidadConvenio: TipoMovilidadConvenio;

  @ManyToOne(() => Convenio, (table) => table.id)
  @JoinColumn({ name: "convenio_id" })
  convenio: Convenio;
}
