import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity('enderecos')
export class Endereco {
  @PrimaryColumn()
  id: number;
  @Column({ type: 'varchar', length: 10 })
  cep: string;
  @Column({ type: "integer", width: 10 })
  numero: number;
  @Column({ type: 'varchar', length: 40 })
  complemento: string;
}
