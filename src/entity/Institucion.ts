import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
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
  nombre: string;

  @OneToMany(() => Contacto, (contacto) => contacto.institucion)
  contactos: Contacto[];

  @ManyToOne(() => Ciudad, (ciudad) => ciudad.instituciones)
  @JoinColumn({ name: "ciudad_id" })
  ciudad: Ciudad;

  @OneToMany(
    () => ProgramaInstitucion,
    (programaInstitucion) => programaInstitucion.programa
  )
  programaInstituciones: ProgramaInstitucion[];
}
