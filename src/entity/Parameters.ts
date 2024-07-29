import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export abstract class Parameters {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ufps_institution_id: number;
}
