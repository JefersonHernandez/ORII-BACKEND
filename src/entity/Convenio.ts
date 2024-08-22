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
  name: string;

  @Column()
  code: string;

  @Column()
  title: string;

  @Column()
  object: string;

  @Column()
  validity: string;

  @Column()
  type_agreement_id: number;

  @Column()
  institution_id: number;

  @Column()
  end_date: Date;

  @Column()
  date: Date;

  @Column()
  seccional_ocania: boolean;

  @ManyToOne(() => TipoConvenio, (table) => table.agreements)
  @JoinColumn({ name: "type_agreement_id" })
  agreementType: TipoConvenio;

  @OneToMany(() => TipoMovilidadConvenioConvenio, (table) => table.convenio)
  tipoMovilidadConvenioConvenios: TipoMovilidadConvenioConvenio[];

  @OneToMany(() => ProgramaInstitucionConvenio, (table) => table.agreement)
  programInstitutionAgreements: ProgramaInstitucionConvenio[];
}
