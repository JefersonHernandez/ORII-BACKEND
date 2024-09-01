import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Actor } from "./Actor";

@Entity()
export class Countries {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  iso: string;

  @OneToMany(() => Actor, (table) => table.country_of_birth)
  actors: Actor[];
}
