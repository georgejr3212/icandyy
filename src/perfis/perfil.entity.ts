import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity('perfis')
export class PerfilEntity {
  @PrimaryColumn() id: number;
  @Column({ width: 25, type: 'varchar' }) descricao: string;
}
