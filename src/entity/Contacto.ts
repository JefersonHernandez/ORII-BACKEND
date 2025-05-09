import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Institucion } from "./Institucion";

@Entity()
export abstract class Contacto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  position: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  web_site: string;

  @OneToOne(() => Institucion, (entity) => entity.contact)
  institution: Institucion;
}
