import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnderecosModule } from './enderecos/enderecos.module';
import { PerfisModule } from './perfis/perfis.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [TypeOrmModule.forRoot(), EnderecosModule, PerfisModule, UsuariosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
