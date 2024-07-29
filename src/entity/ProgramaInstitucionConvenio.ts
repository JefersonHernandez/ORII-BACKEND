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
  convenio_id: number;

  @Column()
  programa_institucion_id: number;

  @ManyToOne(
    () => Convenio,
    (convenio) => convenio.programaInstitucionConvenios
  )
  @JoinColumn({ name: "convenio_id" })
  convenio: Convenio;

  @ManyToOne(() => ProgramaInstitucion, (programa) => programa.programa)
  @JoinColumn({ name: "programa_institucion_id" })
  programaInstitucion: ProgramaInstitucion;
}
