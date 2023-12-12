import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Facultad } from "./Facultad";


@Entity()
export class Programa{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  facultadId: number;

  @ManyToOne(()=>Facultad, (facultad)=>facultad.programas)
  @JoinColumn({ name: 'facultadId'})

  facultad: Facultad;
}
