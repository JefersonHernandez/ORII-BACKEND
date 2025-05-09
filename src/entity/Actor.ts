import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { Countries } from "./Countries";
import { EstadoCivil } from "./EstadoCivil";
import { Gender } from "./Gender";
import { MovilidadActor } from "./MovilidadActor";
import { TipoDocumento } from "./TipoDocumento";

@Entity()
export class Actor {
  @Column()
  nombres: string;

  @Column()
  apellidos: string;

  @PrimaryColumn()
  codigo: number;

  @Column()
  email: string;

  @Column()
  email_inst: string;

  @Column()
  document_id: number;

  @Column()
  numero_doc: string;

  @Column()
  expedido_en: string;

  @Column()
  fecha_expedicion: Date;

  @Column()
  sex_id: number;

  @Column()
  marital_status_id: number;

  @Column()
  fecha_nac: Date;

  @Column()
  country_of_birth_id: number;

  @Column()
  departamento: string;

  @Column()
  municipio: string;

  @Column()
  celular: string;

  @OneToMany(() => MovilidadActor, (table) => table.actor)
  movilidades: MovilidadActor[];

  @ManyToOne(() => TipoDocumento, (table) => table.actors)
  @JoinColumn({ name: "document_id" })
  document: TipoDocumento;

  @ManyToOne(() => Gender, (table) => table.actors)
  @JoinColumn({ name: "sex_id" })
  sex: Gender;

  @ManyToOne(() => EstadoCivil, (table) => table.actors)
  @JoinColumn({ name: "marital_status_id" })
  marital_status: EstadoCivil;

  @ManyToOne(() => Countries, (table) => table.actors)
  @JoinColumn({ name: "country_of_birth_id" })
  country_of_birth: Countries;
}
