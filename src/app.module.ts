import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ProductosModule } from './productos/productos.module.js';
import { Producto } from './productos/entities/producto.entity.js';

@Module({
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
export class AppModule { }