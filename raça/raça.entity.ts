import{
    Entity,
    PrimaryGeneratedColumn,
    Column
}from 'typeorm';

@Entity('raças')
export class Raça {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({length: 50})
    nome_da_raça!: string;

    @Column({length: 40})
    porte!: string;

    @Column({length:500})
    descrição!: string;

    @Column({ type: 'int'})
    expectativa_Vida!: number;

    @Column({default: true})
    ativo!: boolean;

}