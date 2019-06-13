import { IsString, IsNotEmpty, Length, IsNumber, IsOptional } from 'class-validator';

export class EnderecoDto {
  @IsString()
  @IsNotEmpty()
  @Length(8, 10)
  cep: string;

  @IsNotEmpty()
  @IsNumber()
  numero: number;
  
  @IsOptional()
  @IsString()
  complemento?: string;
}
