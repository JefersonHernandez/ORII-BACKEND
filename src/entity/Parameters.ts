import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export abstract class Parameters {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ufps_institution_id: number;

  @Column()
  main_country_id: number;

  @Column()
  application_id: number;
}
