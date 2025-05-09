import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Convenio } from "./Convenio";

@Entity()
export class TipoConvenio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Convenio, (agreement) => agreement.id)
  agreements: Convenio[];
}
