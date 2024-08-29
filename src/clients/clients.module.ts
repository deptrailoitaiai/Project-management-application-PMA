import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsEntity } from './entities/clients.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            ClientsEntity
        ])
    ],
    controllers: [],
    providers: [],
    exports: [],
})
export class ClientsModule {}
