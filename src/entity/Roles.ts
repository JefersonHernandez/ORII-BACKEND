import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Roles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => User, (table) => table.roles)
  @JoinTable({
    name: "user_roles",
    joinColumn: {
      name: "role_id",
    },
    inverseJoinColumn: {
      name: "user_id",
    },
  })
  users: User[];
}
