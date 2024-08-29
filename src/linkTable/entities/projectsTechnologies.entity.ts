import { ProjectsEntity } from 'src/projects/entities/projects.entity';
import { TechnologiesEntity } from 'src/technologies/entities/technologies.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('projects_technologies')
export class ProjectsTechnologiesEntity {
  @PrimaryColumn({ name: 'project_id' })
  ProjectId: string;

  @PrimaryColumn({ name: 'technology_id' })
  technologyId: string;

  @ManyToOne(() => TechnologiesEntity, (technologiesEntity) => technologiesEntity.projectsTechnologiesEntity, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'technology_id', referencedColumnName: 'technologyId' })
  technologiesEntity: TechnologiesEntity;

  @ManyToOne(() => ProjectsEntity, (projectsEntity) => projectsEntity.projectsTechnologiesEntity, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'project_id', referencedColumnName: 'projectId' })
  projectsEntity: ProjectsEntity;
}
