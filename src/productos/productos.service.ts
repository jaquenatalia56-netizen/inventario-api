import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './entities/producto.entity.js';
import { CreateProductoDto } from './dto/create-producto.dto.js';
import { UpdateProductoDto } from './dto/update-producto.dto.js';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private productosRepo: Repository<Producto>,
  ) { }

  create(createDto: CreateProductoDto) {
    const nuevo = this.productosRepo.create(createDto);
    return this.productosRepo.save(nuevo);
  }

  findAll() {
    return this.productosRepo.find();
  }

  async findOne(id: number) {
    const producto = await this.productosRepo.findOneBy({ id });
    if (!producto) throw new NotFoundException(`Producto ${id} no existe`);
    return producto;
  }

  async update(id: number, updateDto: UpdateProductoDto) {
    const producto = await this.findOne(id);
    Object.assign(producto, updateDto);
    return this.productosRepo.save(producto);
  }

  async remove(id: number) {
    const producto = await this.findOne(id);
    return this.productosRepo.remove(producto);
  }
}