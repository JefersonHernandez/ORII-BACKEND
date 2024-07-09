import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Ciudad } from "./Ciudad";
import { ProgramaInstitucionConvenio } from "./ProgramaInstitucionConvenio";
import { TipoConvenio } from "./TipoConvenio";
import { TipoMovilidadConvenioConvenio } from "./TipoMovilidadConvenioConvenio";

@Entity()
export class Convenio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @ManyToOne(() => Ciudad, (ciudad) => ciudad.instituciones)
  @JoinColumn({ name: "ciudad_id" })
  ciudad: Ciudad;

  @ManyToOne(() => TipoConvenio, (tipoConvenio) => tipoConvenio.convenios)
  @JoinColumn({ name: "tipo_convenio_id" })
  tipoConvenio: TipoConvenio;

  @OneToMany(
    () => TipoMovilidadConvenioConvenio,
    (tipoMovilidadConvenioConvenio) => tipoMovilidadConvenioConvenio.id
  )
  tipoMovilidadConvenioConvenios: TipoMovilidadConvenioConvenio[];

  @OneToMany(
    () => ProgramaInstitucionConvenio,
    (programaInstitucionConvenios) => programaInstitucionConvenios.id
  )
  programaInstitucionConvenios: ProgramaInstitucionConvenio[];
}
