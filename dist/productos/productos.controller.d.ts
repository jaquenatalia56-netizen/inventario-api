import { ProductosService } from './productos.service.js';
import { CreateProductoDto } from './dto/create-producto.dto.js';
import { UpdateProductoDto } from './dto/update-producto.dto.js';
export declare class ProductosController {
    private readonly productosService;
    constructor(productosService: ProductosService);
    create(createProductoDto: CreateProductoDto): Promise<import("./entities/producto.entity.js").Producto>;
    findAll(): Promise<import("./entities/producto.entity.js").Producto[]>;
    findOne(id: string): Promise<import("./entities/producto.entity.js").Producto>;
    update(id: string, updateProductoDto: UpdateProductoDto): Promise<import("./entities/producto.entity.js").Producto>;
    remove(id: string): Promise<import("./entities/producto.entity.js").Producto>;
}
