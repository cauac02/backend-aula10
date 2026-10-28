import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './pet/pet.entity.js';
import { Raça } from './raça/raça.entity.js';
import { Tutor } from './tutor/tutor.entity.js';
import { Especie } from './especie/especie.entity.js';
import { OrigemdaEspecie } from './origem_especie/origem_especie.entity.js';

@Module({
imports: [
TypeOrmModule.forRoot({
type: 'mysql',
host: 'localhost',
port: 3306,
username: 'root',
password: '12345678',
database: 'projeto3',
entities: [Pet, Raça, Tutor, Especie, OrigemdaEspecie],
synchronize: true,
logging: true,
}),
],
})
export class AppModule {}
