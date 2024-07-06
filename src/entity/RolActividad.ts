import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Actividad } from "./Actividad";
import { Rol } from "./Rol";

@Entity()
export class RolActividad {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Rol, (rol) => rol.rolesActividades)
  @JoinColumn({ name: "rol_id" })
  rol: Rol;

  @ManyToOne(() => Actividad, (actividad) => actividad.rolesActividades)
  @JoinColumn({ name: "actividad_id" })
  actividad: Actividad;
}
