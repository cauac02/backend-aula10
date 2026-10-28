import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';
import { Especie } from '../especie/especie.entity.js';

@Entity('origem_especies')
export class OrigemdaEspecie {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({length: 50})
    continente!: string;

    @Column({length: 30})
    pais!: string;

    @Column({length: 40})
    regiao!: string;

    @Column({length: 500})
    descricao!: string;
    
   @Column({default:true})
    ativo!: boolean;

}