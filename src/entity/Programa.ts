import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Facultad } from "./Facultad";
import { ProgramaInstitucion } from "./ProgramaInstitucion";

@Entity()
export class Programa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  facultadId: number;

  @ManyToOne(() => Facultad, (facultad) => facultad.programas)
  @JoinColumn({ name: "facultadId" })
  facultad: Facultad;

  @OneToMany(
    () => ProgramaInstitucion,
    (programaInstitucion) => programaInstitucion.programa
  )
  instituciones: ProgramaInstitucion[];
}
