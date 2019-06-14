import { IsString, IsNotEmpty, Length } from 'class-validator';
export class PerfilDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 25)
  descricao: string;
}
