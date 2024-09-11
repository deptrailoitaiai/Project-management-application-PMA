import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TechnologiesModule } from './modules/technologies/technologies.module'; 
import { UsersModule } from './modules/users/users.module'; 
import { ProjectsModule } from './modules/projects/projects.module'; 
import { ClientsModule } from './modules/clients/clients.module'; 
import { DepartmentsModule } from './modules/departments/departments.module'; 
import { AuthenModule } from './modules/authen/authen.module'; 
import { TasksModule } from './modules/tasks/tasks.module'; 
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './database/database.config';

@Module({
  imports: [
    TechnologiesModule,
    UsersModule,
    ProjectsModule,
    ClientsModule,
    DepartmentsModule,
    AuthenModule,
    TypeOrmModule.forRoot(TypeOrmConfig),
    TasksModule,
    ScheduleModule.forRoot()
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
  exports: [],
})
export class AppModule {}