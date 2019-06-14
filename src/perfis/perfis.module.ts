import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PerfilEntity } from './perfil.entity';
import { PerfisController } from './perfis.controller';
import { PerfisService } from './perfis.service';

@Module({
  imports: [TypeOrmModule.forFeature([PerfilEntity])],
  controllers: [PerfisController],
  providers: [PerfisService]
})
export class PerfisModule { }
