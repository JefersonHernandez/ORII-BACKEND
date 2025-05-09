import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Actividad } from "./Actividad";
import { Actor } from "./Actor";
import { Convenio } from "./Convenio";
import { Countries } from "./Countries";
import { Facultad } from "./Facultad";
import { FuenteFinanciacionInternacional } from "./FuenteFinanciacionInternacional";
import { FuenteFinanciacionNacional } from "./FuenteFinanciacionNacional";
import { MobilityApplication } from "./MobilityApplication";
import { ModalidadMovilidad } from "./ModalidadMovilidad";
import { Programa } from "./Programa";
import { Rol } from "./Rol";
import { Semester } from "./Semester";
import { TipoMovilidad } from "./TipoMovilidad";

@Entity()
export class MovilidadActor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  mobility_type_id: number;

  @Column()
  mobility_class_id: number;

  @Column()
  faculty_id: number;

  @Column()
  program_id: number;

  @Column()
  year: number;

  @Column()
  semester_id: number;

  @Column()
  activity_id: number;

  @Column()
  activity_description: string;

  @Column()
  origin_institution: string;

  @Column()
  origin_institution_address: string;

  @Column()
  origin_country_id: number;

  @Column()
  origin_state: string;

  @Column()
  origin_municipality: string;

  @Column()
  institutional_destiny: string;

  @Column()
  institutional_destiny_address: string;

  @Column()
  destiny_country_id: number;

  @Column()
  destination_state: string;

  @Column()
  destination_municipality: string;

  @Column()
  days: number;

  @Column()
  application_id: number;

  @Column()
  national_financing_id: number;

  @Column()
  national_financing_amount: number;

  @Column()
  international_financing_id: number;

  @Column()
  financer_country_id: number;

  @Column()
  international_financing_amount: number;

  @Column()
  actor_code: number;

  @ManyToOne(() => Actor, (actor) => actor.movilidades)
  @JoinColumn({ name: "actor_code" })
  actor: Actor;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  rol_id: number;

  @Column()
  agreement_id: number;

  @Column()
  mobility_source_id: number;

  @Column()
  office: string;

  @ManyToOne(() => TipoMovilidad, (table) => table.movilities)
  @JoinColumn({ name: "mobility_type_id" })
  movility_type: TipoMovilidad;

  @ManyToOne(() => TipoMovilidad, (table) => table.movilities)
  @JoinColumn({ name: "mobility_source_id" })
  mobility_source: TipoMovilidad;

  @ManyToOne(() => Facultad, (table) => table.movilities)
  @JoinColumn({ name: "faculty_id" })
  faculty: Facultad;

  @ManyToOne(() => Programa, (table) => table.movilities)
  @JoinColumn({ name: "program_id" })
  program: Programa;

  @ManyToOne(() => Semester, (table) => table.movilities)
  @JoinColumn({ name: "semester_id" })
  semester: Semester;

  @ManyToOne(() => Actividad, (table) => table.movilities)
  @JoinColumn({ name: "activity_id" })
  activity: Actividad;

  @ManyToOne(() => Countries, (table) => table.movilities)
  @JoinColumn({ name: "origin_country_id" })
  origin_country: Countries;

  @ManyToOne(() => Countries, (table) => table.movilities_destination)
  @JoinColumn({ name: "destiny_country_id" })
  destiny_country: Countries;

  @ManyToOne(() => MobilityApplication, (table) => table.movilities)
  @JoinColumn({ name: "application_id" })
  mobility_application: MobilityApplication;

  @ManyToOne(() => FuenteFinanciacionNacional, (table) => table.movilities)
  @JoinColumn({ name: "national_financing_id" })
  national_financing: FuenteFinanciacionNacional;

  @ManyToOne(() => FuenteFinanciacionInternacional, (table) => table.movilities)
  @JoinColumn({ name: "international_financing_id" })
  international_financing: FuenteFinanciacionInternacional;

  @ManyToOne(() => Countries, (table) => table.movilities)
  @JoinColumn({ name: "financer_country_id" })
  financer_country: Countries;

  @ManyToOne(() => ModalidadMovilidad, (table) => table.movilities)
  @JoinColumn({ name: "mobility_class_id" })
  mobility_class: ModalidadMovilidad;

  @ManyToOne(() => Rol, (table) => table.movilities)
  @JoinColumn({ name: "rol_id" })
  rol: Rol;

  @ManyToOne(() => Convenio, (table) => table.movilities)
  @JoinColumn({ name: "agreement_id" })
  agreement: Convenio;
}
