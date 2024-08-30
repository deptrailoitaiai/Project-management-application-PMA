import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentsEntity } from './entities/departments.entity';
import { DepartmentsController } from './controllers/departments.controller';
import { DepartmentsRepository } from './repository/departments.repository';
import { DepartmentsService } from './services/departments.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            DepartmentsEntity
        ])
    ],
    controllers: [DepartmentsController],
    providers: [DepartmentsRepository, DepartmentsService],
    exports: [DepartmentsService]
})
export class DepartmentsModule {}
