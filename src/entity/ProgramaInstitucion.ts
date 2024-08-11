import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Institucion } from "./Institucion";
import { Programa } from "./Programa";
import { ProgramaInstitucionConvenio } from "./ProgramaInstitucionConvenio";

@Entity()
export abstract class ProgramaInstitucion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  instititution_id: number;

  @Column()
  program_id: number;

  @OneToMany(
    () => ProgramaInstitucionConvenio,
    (table) => table.programInstitution
  )
  programInstitutionAgreements: ProgramaInstitucionConvenio[];

  @ManyToOne(() => Programa, (table) => table.instituciones)
  @JoinColumn({ name: "program_id" })
  program: Programa;

  @ManyToOne(() => Institucion, (table) => table.programInstitutions)
  @JoinColumn({ name: "instititution_id" })
  institution: Institucion;
}
