import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Actor } from "./Actor";


@Entity()
export class MovilidadActor{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipo_mov: string;

  @Column()
  clase_mov: string;

  @Column()
  facultad: string;

  @Column()
  programa: string;

  @Column()
  anio_mov: Date;

  @Column()
  semestre_mov: string;

  @Column()
  actividad_mov: string;

  @Column()
  descrip_act_mov: string;

  @Column()
  inst_origen: string;

  @Column()
  direccion_origen: string;

  @Column()
  pais_origen: string;

  @Column()
  depart_origen: string;

  @Column()
  municipio_origen: string;

  @Column()
  inst_destino: string;

  @Column()
  direccion_destino: string;

  @Column()
  pais_destino: string;

  @Column()
  depart_destino: string;

  @Column()
  municipio_destino: string;

  @Column()
  numero_dias_mov: number;

  @Column()
  mov_convenio: string;

  @Column()
  fuent_fin_nacional: string;

  @Column()
  valor_fin_nacional: number;

  @Column()
  fuent_fin_internacional: string;

  @Column()
  pais_fin_internacional: string;

  @Column()
  valor_fin_internacional: number;


  @Column()
  codigo_actor: number;

  @ManyToOne(()=>Actor, (actor)=>actor.movilidades)
  @JoinColumn({ name: 'codigo_actor'})

  actor: Actor;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  rol: string;

  @Column()
  numero_convenio_mov: string;
}
