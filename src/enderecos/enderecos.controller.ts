import { EnderecoDto } from './endereco-dto';
import { Controller, Get, Query, Param, HttpException, HttpStatus, Post, Body, Put, Delete } from '@nestjs/common';

import { EnderecosService } from './enderecos.service';

@Controller('enderecos')
export class EnderecosController {

  constructor(private enderecoService: EnderecosService) { }

  @Get()
  async findAll(@Query() queryParams) {
    try {
      const result = await this.enderecoService.getAll(queryParams);

      return result;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    try {
      const result = await this.enderecoService.getOne(id);

      return result;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
  
  @Post()
  async create(@Body() data: EnderecoDto) {
    try {
      const result = await this.enderecoService.create(data);

      return result;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: EnderecoDto) {
    try {
      const result = await this.enderecoService.update(id, data);

      return result;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    try {
      const result = await this.enderecoService.delete(id);
      if (result.affected) {
        return 1;
      }
      return 0;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

}
