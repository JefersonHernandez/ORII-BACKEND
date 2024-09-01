import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { MovilidadActor } from "./MovilidadActor";
import { Programa } from "./Programa";

@Entity()
export class Facultad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => Programa, (table) => table.facultad)
  programas: Programa[];

  @OneToMany(() => MovilidadActor, (table) => table.faculty)
  movilities: MovilidadActor[];
}
