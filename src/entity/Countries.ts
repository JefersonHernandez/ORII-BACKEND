import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Actor } from "./Actor";
import { MovilidadActor } from "./MovilidadActor";

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

  @OneToMany(() => MovilidadActor, (table) => table.origin_country)
  movilities: MovilidadActor[];

  @OneToMany(() => MovilidadActor, (table) => table.destiny_country)
  movilities_destination: MovilidadActor[];

  @OneToMany(() => MovilidadActor, (table) => table.financer_country)
  movilities_financer: MovilidadActor[];
}
