import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { EnderecosController } from './enderecos.controller';
import { EnderecosService } from './enderecos.service';
import { Endereco } from './endereco.entity';

@Module({
  controllers: [EnderecosController],
  providers: [EnderecosService],
  imports: [
    TypeOrmModule.forFeature([Endereco])
  ]
})
export class EnderecosModule {}
