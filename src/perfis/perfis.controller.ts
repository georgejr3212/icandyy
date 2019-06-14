import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';

import { PerfilDto } from './perfil-dto';
import { PerfisService } from './perfis.service';

@Controller('perfis')
export class PerfisController {
  constructor(private perfisService: PerfisService) { }

  @Get()
  async findAll(@Query() queryParams) {
    try {
      const result = await this.perfisService.getAll(queryParams);

      return result;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    try {
      const result = await this.perfisService.getOne(id);

      return result;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Post()
  async create(@Body() data: PerfilDto) {
    try {
      const result = await this.perfisService.create(data);

      return result;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: PerfilDto) {
    try {
      const result = await this.perfisService.update(id, data);

      return result;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    try {
      const result = await this.perfisService.delete(id);
      if (result.affected) {
        return 1;
      }
      return 0;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
