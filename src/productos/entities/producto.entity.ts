import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('productos')
export class Producto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column('int')
    precio: number;

    @Column('int')
    stock: number;

    @Column()
    categoria: string;
}
