import { DepartmentsProjectsEntity } from 'src/modules/linkTable/entities/departmentsProjects.entity';
import { ProjectsClientsEntity } from 'src/modules/linkTable/entities/projectsClients.entity';
import { ProjectsTechnologiesEntity } from 'src/modules/linkTable/entities/projectsTechnologies.entity';
import { UsersProjectsEntity } from 'src/modules/linkTable/entities/usersProjects.entity';
import { TasksEntity } from 'src/modules/tasks/entities/tasks.entity';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export enum ProjectTypeEnum {
  product = 'product',
  outsource = 'outsource',
}

export enum ProjectStatusEnum {
  planning = 'planning',
  design = 'design',
  development = 'development',
  testing = 'testing',
  deployment = 'deployment',
  maintainance = 'maintainance',
  close = 'close',
}

@Entity('projects')
export class ProjectsEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'project_id' })
  projectId: string;

  @Column({ name: 'project_name', nullable: false, unique: true })
  projectName: string;

  @Column({ name: 'project_type', nullable: false, type: 'enum', enum: ProjectTypeEnum })
  projectType: ProjectTypeEnum;

  @Column({
    name: 'project_status',
    nullable: false,
    type: 'enum',
    enum: ProjectStatusEnum,
    default: ProjectStatusEnum.planning,
  })
  projectStatus: ProjectStatusEnum;

  @CreateDateColumn({ name: 'starting_date' })
  startingDate: Date;

  @OneToMany(() => UsersProjectsEntity, (usersProjectsEntity) => usersProjectsEntity.projectsEntity)
  usersProjectsEntity: UsersProjectsEntity[];

  @OneToMany(
    () => ProjectsTechnologiesEntity,
    (projectsTechnologiesEntity) => projectsTechnologiesEntity.projectsEntity,
  )
  projectsTechnologiesEntity: ProjectsTechnologiesEntity[];

  @OneToMany(() => ProjectsClientsEntity, (projectsClientsEntity) => projectsClientsEntity.projectsEntity)
  projectsClientsEntity: ProjectsClientsEntity[];

  @OneToMany(() => DepartmentsProjectsEntity, (departmentsProjectsEntity) => departmentsProjectsEntity.projectsEntity)
  departmentsProjectsEntity: DepartmentsProjectsEntity[];

  @OneToMany(() => TasksEntity, (tasksEntity) => tasksEntity.projectsEntity)
  tasksEntity: TasksEntity[];
}
