import { Entity, OneToMany } from "typeorm";
import { BaseCatalogEntity } from "./BaseCatalogEntity ";
import { MovilidadActor } from "./MovilidadActor";
import { RolActividad } from "./RolActividad";

@Entity()
export class Rol extends BaseCatalogEntity {
  @OneToMany(() => RolActividad, (rolActividad) => rolActividad.rol)
  rolesActividades: RolActividad[];

  @OneToMany(() => MovilidadActor, (table) => table.rol)
  movilities: MovilidadActor[];
}
