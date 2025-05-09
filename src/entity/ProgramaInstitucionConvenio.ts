import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Convenio } from "./Convenio";
import { ProgramaInstitucion } from "./ProgramaInstitucion";

@Entity()
export class ProgramaInstitucionConvenio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  agreement_id: number;

  @Column()
  program_institution_id: number;

  @ManyToOne(() => Convenio, (table) => table.programInstitutionAgreements)
  @JoinColumn({ name: "agreement_id" })
  agreement: Convenio;

  @ManyToOne(
    () => ProgramaInstitucion,
    (table) => table.programInstitutionAgreements
  )
  @JoinColumn({ name: "program_institution_id" })
  programInstitution: ProgramaInstitucion;
}
