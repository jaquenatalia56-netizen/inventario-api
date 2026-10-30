import { Repository } from 'typeorm';
import { Producto } from './entities/producto.entity.js';
import { CreateProductoDto } from './dto/create-producto.dto.js';
import { UpdateProductoDto } from './dto/update-producto.dto.js';
export declare class ProductosService {
    private productosRepo;
    constructor(productosRepo: Repository<Producto>);
    create(createDto: CreateProductoDto): Promise<Producto>;
    findAll(): Promise<Producto[]>;
    findOne(id: number): Promise<Producto>;
    update(id: number, updateDto: UpdateProductoDto): Promise<Producto>;
    remove(id: number): Promise<Producto>;
}
