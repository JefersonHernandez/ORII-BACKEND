import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TipoMovilidadConvenioConvenio } from "./TipoMovilidadConvenioConvenio";

@Entity()
export class TipoMovilidadConvenio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(
    () => TipoMovilidadConvenioConvenio,
    (table) => table.tipoMovilidadConvenio
  )
  tipoMovilidadConvenioConvenios: TipoMovilidadConvenioConvenio[];
}
