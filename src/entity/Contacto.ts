import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Institucion } from "./Institucion";

@Entity()
export abstract class Contacto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  position: string;

  @Column()
  email: string;

  @Column()
  web_site: string;

  @OneToOne(() => Institucion, (institution) => institution.contact)
  institution: Institucion;
}
