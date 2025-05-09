import { Entity, PrimaryColumn } from "typeorm";

@Entity()
export class UserRoles {
  @PrimaryColumn()
  user_id: number;

  @PrimaryColumn()
  role_id: number;
}
