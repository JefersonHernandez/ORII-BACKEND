import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Programa } from "./Programa";

@Entity()
export class Facultad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(()=>Programa, (programa)=>programa.facultad)
  programas : Programa[];
  
}
