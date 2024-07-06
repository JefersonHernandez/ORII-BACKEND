import { Entity, OneToMany } from "typeorm";
import { BaseCatalogEntity } from "./BaseCatalogEntity ";
import { RolActividad } from "./RolActividad";

@Entity()
export class Rol extends BaseCatalogEntity {
  @OneToMany(() => RolActividad, (rolActividad) => rolActividad.rol)
  rolesActividades: RolActividad[];
}
