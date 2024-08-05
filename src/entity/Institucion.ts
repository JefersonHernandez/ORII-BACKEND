import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Ciudad } from "./Ciudad";
import { Contacto } from "./Contacto";
import { ProgramaInstitucion } from "./ProgramaInstitucion";

@Entity()
export class Institucion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  contact_id: number;

  @Column()
  city_id: number;

  @OneToOne(() => Contacto)
  @JoinColumn({ name: "contact_id" })
  contact: Contacto;

  @OneToMany(
    () => ProgramaInstitucion,
    (programaInstitucion) => programaInstitucion.programa
  )
  programaInstituciones: ProgramaInstitucion[];

  @ManyToOne(() => Ciudad, (city) => city.institucion)
  @JoinColumn({ name: "city_id" })
  city: Ciudad;
}
