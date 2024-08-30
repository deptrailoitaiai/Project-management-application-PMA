import { DepartmentsEntity } from 'src/modules/departments/entities/departments.entity';
import { ProjectsEntity } from 'src/modules/projects/entities/projects.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('departments_projects')
export class DepartmentsProjectsEntity {
  @PrimaryColumn({ name: 'department_id' })
  departmentId: string;

  @PrimaryColumn({ name: 'project_id' })
  projectId: string;

  @ManyToOne(() => ProjectsEntity, (projectsEntity) => projectsEntity.departmentsProjectsEntity, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'project_id', referencedColumnName: 'projectId' })
  projectsEntity: ProjectsEntity;

  @ManyToOne(() => DepartmentsEntity, (departmentsEntity) => departmentsEntity.departmentsProjectsEntity, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'departments_id', referencedColumnName: 'departmentId' })
  departmentsEntity: ProjectsEntity;
}
