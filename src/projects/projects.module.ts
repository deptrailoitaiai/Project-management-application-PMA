import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsEntity } from './entities/projects.entity';
import { ProjectsController } from './controllers/projects.controller';
import { ProjectsRepository } from './repository/projects.repository';
import { ProjectsService } from './services/projects.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectsEntity])],
  controllers: [ProjectsController],
  providers: [ProjectsRepository, ProjectsService],
  exports: [ProjectsService],
})
export class ProjectsModule {}
