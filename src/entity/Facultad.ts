import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Programa } from "./Programa";

@Entity()
export class Facultad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => Programa, (table) => table.facultad)
  programas: Programa[];
}
