import { ClientsEntity } from 'src/clients/entities/clients.entity';
import { ProjectsEntity } from 'src/projects/entities/projects.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('projects_clients')
export class ProjectsClientsEntity {
  @PrimaryColumn({ name: 'project_id' })
  projectId: string;

  @PrimaryColumn({ name: 'client_id' })
  clientId: string;

  @ManyToOne(() => ProjectsEntity, (projectsEntity) => projectsEntity.projectsClientsEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'project_id', referencedColumnName: 'projectId' })
  projectsEntity: ProjectsEntity;

  @ManyToOne(() => ClientsEntity, (clientsEntity) => clientsEntity.projectsClientsEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'client_id', referencedColumnName: 'clientId' })
  clientsEntity: ClientsEntity;
}
