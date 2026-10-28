import{
    Entity,
    PrimaryGeneratedColumn,
    Column

} from 'typeorm';

@Entity ('pets')
export class Pet {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({length: 100, unique: true})
    nome!: string;

    @Column({length: 50})
    data_nasc!: string;

    @Column({type: 'int'})
    idade!: number;

    @Column({type: 'char', length: 1 })
    sexo!: string;

    @Column({length: 30 })
    peso!: string;

    @Column({length: 30})
    cor_predominante!: string;

    @Column({default: false})
    castrado!: boolean;

@Column({default: true})
ativo!: boolean;
}