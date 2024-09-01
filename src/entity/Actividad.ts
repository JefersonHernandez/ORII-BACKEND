import { Entity, OneToMany } from "typeorm";
import { BaseCatalogEntity } from "./BaseCatalogEntity ";
import { MovilidadActor } from "./MovilidadActor";
import { RolActividad } from "./RolActividad";

@Entity()
export class Actividad extends BaseCatalogEntity {
  @OneToMany(() => RolActividad, (rolActividad) => rolActividad.actividad)
  rolesActividades: RolActividad[];

  @OneToMany(() => MovilidadActor, (table) => table.activity)
  movilities: MovilidadActor[];
}
