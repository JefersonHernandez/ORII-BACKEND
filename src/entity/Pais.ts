import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Ciudad } from "./Ciudad";

@Entity()
export class Pais {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Ciudad, (city) => city.country)
  cities: Ciudad[];
}
