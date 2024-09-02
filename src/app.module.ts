import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TechnologiesModule } from './modules/technologies/technologies.module'; 
import { UsersModule } from './modules/users/users.module'; 
import { ProjectsModule } from './modules/projects/projects.module'; 
import { ClientsModule } from './modules/clients/clients.module'; 
import { DepartmentsModule } from './modules/departments/departments.module'; 
import { AuthenModule } from './modules/authen/authen.module'; 
import { MySqlConfig } from './database/database.config';
import { TasksModule } from './modules/tasks/tasks.module'; 
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    TechnologiesModule,
    UsersModule,
    ProjectsModule,
    ClientsModule,
    DepartmentsModule,
    AuthenModule,
    MySqlConfig,
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
