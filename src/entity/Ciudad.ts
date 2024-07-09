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
  nombre: string;

  @ManyToOne(() => Pais, (pais) => pais.ciudades)
  @JoinColumn({ name: "pais_id" })
  pais: Pais;

  @OneToMany(() => Institucion, (institucion) => institucion.ciudad)
  instituciones: Institucion[];
}
