import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity ('especies')
export class Especie {
     
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({length: 100})
    nome_Popular!: string;

    @Column({length: 100})
    nome_Cientifico!: string;

    @Column({length: 500})
    descricao!: string;

   @Column({default: true})
    domestico!: boolean;

   @Column({default:true})
    ativo!: boolean;
}