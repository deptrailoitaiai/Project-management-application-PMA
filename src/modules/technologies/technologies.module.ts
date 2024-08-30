import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechnologiesEntity } from './entities/technologies.entity';
import { TechnologiesRepository } from './repository/technologies.repository';
import { TechnologiesService } from './services/technologies.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([TechnologiesEntity])
    ],
    controllers: [],    
    providers: [
        TechnologiesRepository,
        TechnologiesService
    ],
    exports: [TechnologiesService],
})
export class TechnologiesModule {}
