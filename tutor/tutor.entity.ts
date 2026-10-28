import {
    Entity,
    PrimaryGeneratedColumn,
    Column
}from 'typeorm';

@Entity('tutures')
export class Tutor {

    @PrimaryGeneratedColumn()
    id!:number;

    @Column({length:100, unique: true})
    nome!: string;

    @Column({length:100, unique: true })
    CPF!: string;

    @Column({length:150})
    email!: string;

    @Column({type: 'int'})
telefone!: number;

@Column({length:150})
endereço!: string;

@Column({default:true})
ativo!: boolean;
}
