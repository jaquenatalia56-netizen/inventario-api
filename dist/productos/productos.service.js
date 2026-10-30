var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './entities/producto.entity.js';
let ProductosService = class ProductosService {
    productosRepo;
    constructor(productosRepo) {
        this.productosRepo = productosRepo;
    }
    create(createDto) {
        const nuevo = this.productosRepo.create(createDto);
        return this.productosRepo.save(nuevo);
    }
    findAll() {
        return this.productosRepo.find();
    }
    async findOne(id) {
        const producto = await this.productosRepo.findOneBy({ id });
        if (!producto)
            throw new NotFoundException(`Producto ${id} no existe`);
        return producto;
    }
    async update(id, updateDto) {
        const producto = await this.findOne(id);
        Object.assign(producto, updateDto);
        return this.productosRepo.save(producto);
    }
    async remove(id) {
        const producto = await this.findOne(id);
        return this.productosRepo.remove(producto);
    }
};
ProductosService = __decorate([
    Injectable(),
    __param(0, InjectRepository(Producto)),
    __metadata("design:paramtypes", [Repository])
], ProductosService);
export { ProductosService };
//# sourceMappingURL=productos.service.js.map