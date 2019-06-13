import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnderecosModule } from './enderecos/enderecos.module';

@Module({
  imports: [TypeOrmModule.forRoot(), EnderecosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
