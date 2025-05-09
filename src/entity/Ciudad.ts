import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Institucion } from "./Institucion";
import { Pais } from "./Pais";

@Entity()
export class Ciudad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  country_id: number;

  @ManyToOne(() => Pais, (country) => country.cities)
  @JoinColumn({ name: "country_id" })
  country: Pais;

  // @OneToMany(() => Institucion, (institucion) => institucion.city)
  // instituciones: Institucion[];

  // @ManyToOne(() => Institucion, (institucion) => institucion.cities)
  // @JoinColumn({ name: "city_id" })
  // city: Institucion;

  @OneToMany(() => Institucion, (institucion) => institucion.city)
  institucion: Institucion[];
}
