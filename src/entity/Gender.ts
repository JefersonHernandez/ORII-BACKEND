import { Entity, OneToMany } from "typeorm";
import { Actor } from "./Actor";
import { BaseCatalogEntity } from "./BaseCatalogEntity ";

@Entity()
export class Gender extends BaseCatalogEntity {
  @OneToMany(() => Actor, (photo) => photo.sex)
  actors: Actor[];
}
