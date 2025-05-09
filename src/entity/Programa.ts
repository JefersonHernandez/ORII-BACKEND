import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Facultad } from "./Facultad";
import { MovilidadActor } from "./MovilidadActor";
import { ProgramaInstitucion } from "./ProgramaInstitucion";

@Entity()
export class Programa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  faculty_id: number;

  @ManyToOne(() => Facultad, (table) => table.programas)
  @JoinColumn({ name: "faculty_id" })
  facultad: Facultad;

  @OneToMany(() => ProgramaInstitucion, (table) => table.program)
  instituciones: ProgramaInstitucion[];

  @OneToMany(() => MovilidadActor, (table) => table.program)
  movilities: MovilidadActor[];
}
