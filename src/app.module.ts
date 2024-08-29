import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TechnologiesModule } from './technologies/technologies.module';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { ClientsModule } from './clients/clients.module';
import { DepartmentsModule } from './departments/departments.module';
import { AuthenModule } from './authen/authen.module';
import { MySqlConfig } from './database/database.config';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TechnologiesModule,
    UsersModule,
    ProjectsModule,
    ClientsModule,
    DepartmentsModule,
    AuthenModule,
    MySqlConfig,
    TasksModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
  exports: [],
})
export class AppModule {}
