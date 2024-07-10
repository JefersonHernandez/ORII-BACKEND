import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Convenio } from "./Convenio";

@Entity()
export class TipoConvenio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => Convenio, (convenio) => convenio.id)
  convenios: Convenio[];
}
