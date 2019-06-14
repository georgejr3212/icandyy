import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PerfilDto } from './perfil-dto';
import { PerfilEntity } from './perfil.entity';

@Injectable()
export class PerfisService {
  constructor(@InjectRepository(PerfilEntity) private readonly perfilRepository: Repository<PerfilEntity>) { }

  async getAll(params) {
    try {
      const { page = 0, limit = 10 } = params;

      const resources = await this.perfilRepository.createQueryBuilder('end')
        .take(parseInt(limit))
        .skip(parseInt(page))
        .orderBy('id', 'DESC')
        .getManyAndCount();

      return resources;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async getOne(id: number) {
    try {
      const resources = await this.perfilRepository.findOne(id);

      return resources;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async create(data: PerfilDto) {
    try {
      const resource = await this.perfilRepository.save(data);

      return resource;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: number, data: PerfilDto) {
    try {
      const resource = await this.perfilRepository.findOne(id);

      if (!resource) {
        throw new HttpException('Perfil não encontrado!', HttpStatus.BAD_REQUEST);
      }

      resource.descricao = data.descricao;

      this.perfilRepository.save(resource);

      return resource;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: number) {
    try {
      const resource = await this.perfilRepository.delete(id);

      if (!resource) {
        throw new HttpException('Endereço não encontrado!', HttpStatus.BAD_REQUEST);
      }

      return resource;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
