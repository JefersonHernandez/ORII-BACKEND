import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ProgramaInstitucionConvenio } from "./ProgramaInstitucionConvenio";
import { TipoConvenio } from "./TipoConvenio";
import { TipoMovilidadConvenioConvenio } from "./TipoMovilidadConvenioConvenio";

@Entity()
export class Convenio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  codification: string;

  @Column()
  title: string;

  @Column()
  object: string;

  @Column()
  tipo_convenio_id: number;

  @Column()
  fecha_finalizacion: Date;

  @Column()
  seccional_cucuta: boolean;

  @Column()
  seccional_ocania: boolean;

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
