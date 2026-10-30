var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ProductosModule } from './productos/productos.module.js';
import { Producto } from './productos/entities/producto.entity.js';
let AppModule = class AppModule {
};
AppModule = __decorate([
    Module({
        imports: [
            ServeStaticModule.forRoot({
                rootPath: join(process.cwd(), 'public'),
                exclude: ['/productos*'],
            }),
            TypeOrmModule.forRoot({
                type: 'postgres',
                url: 'postgresql://neondb_owner:npg_mL9bhionYp0l@ep-royal-leaf-b71q52al-pooler.c-13.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
                entities: [Producto],
                synchronize: true,
                ssl: true,
                extra: { ssl: { rejectUnauthorized: false } }
            }),
            ProductosModule,
        ],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map