import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Institucion } from "./Institucion";

@Entity()
export abstract class Contacto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  cargo: string;

  @Column()
  correo: string;

  @Column()
  sitio_web: string;

  @ManyToOne(() => Institucion, (institucion) => institucion.contactos)
  @JoinColumn({ name: "institucion_id" })
  institucion: Institucion;
}
