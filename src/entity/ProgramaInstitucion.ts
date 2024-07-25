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
  institucion_id: number;

  @Column()
  programa_id: number;

  @OneToMany(
    () => ProgramaInstitucionConvenio,
    (programaInstitucionConvenio) =>
      programaInstitucionConvenio.programaInstitucion
  )
  programaInstitucionConvenios: ProgramaInstitucionConvenio[];

  @ManyToOne(() => Programa, (programa) => programa.instituciones)
  @JoinColumn({ name: "programa_id" })
  programa: Programa;

  @ManyToOne(
    () => Institucion,
    (institucion) => institucion.programaInstituciones
  )
  @JoinColumn({ name: "institucion_id" })
  institucion: Institucion;
}
