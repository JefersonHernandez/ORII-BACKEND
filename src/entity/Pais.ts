import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Ciudad } from "./Ciudad";

@Entity()
export class Pais {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => Ciudad, (ciudad) => ciudad.pais)
  ciudades: Ciudad[];
}
