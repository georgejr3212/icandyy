import { EnderecoDto } from './endereco-dto';
import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Endereco } from './endereco.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EnderecosService {

  constructor(@InjectRepository(Endereco) private readonly enderecoRepository: Repository<Endereco>) { }

  async getAll(params) {
    try {
      const { page = 0, limit = 10 } = params;

      const resources = await this.enderecoRepository.createQueryBuilder('end')
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
      const resources = await this.enderecoRepository.findOne(id);

      return resources;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async create(data: EnderecoDto) {
    try {
      const resource = await this.enderecoRepository.save(data);

      return resource;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: number, data: EnderecoDto) {
    try {
      const resource = await this.enderecoRepository.findOne(id);

      if (!resource) {
        throw new HttpException('Endereço não encontrado!', HttpStatus.BAD_REQUEST);
      }

      resource.cep = data.cep;
      resource.complemento = data.complemento;
      resource.numero = data.numero;

      this.enderecoRepository.save(resource);

      return resource;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: number) {
    try {
      const resource = await this.enderecoRepository.delete(id);

      if (!resource) {
        throw new HttpException('Endereço não encontrado!', HttpStatus.BAD_REQUEST);
      }

      return resource;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

}
