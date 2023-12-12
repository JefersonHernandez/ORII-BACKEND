import { Column, Entity, JoinTable, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { MovilidadActor } from "./MovilidadActor";

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
  tipo_doc: string;

  
  @Column()
  numero_doc: string;

  
  @Column()
  expedido_en: string;

  
  @Column()
  fecha_expedicion: Date;

  
  @Column()
  sexo: string;

  
  @Column()
  est_civil: string;

  @Column()
  fecha_nac: Date;

  @Column()
  pais_nac: string;

  @Column()
  departamento: string;

  @Column()
  municipio: string;

  @Column()
  celular: string;


  @OneToMany(()=>MovilidadActor, (movilidad)=>movilidad.actor)
  movilidades : MovilidadActor[];
  
}
