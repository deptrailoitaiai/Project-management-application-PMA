import { ProjectsEntity } from 'src/modules/projects/entities/projects.entity';
import { UsersEntity } from 'src/modules/users/entities/users.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users_projects')
export class UsersProjectsEntity {
  @PrimaryColumn({ name: 'user_id' })
  userId: string;

  @PrimaryColumn({ name: 'pm_id' })
  pmId: string;

  @PrimaryColumn({ name: 'project_id' })
  projectId: string;

  @ManyToOne(() => UsersEntity, (usersEntity) => usersEntity.usersProjectsEntityUserId, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'userId' })
  usersEntityUserId: UsersEntity;

  @ManyToOne(() => UsersEntity, (usersEntity) => usersEntity.usersProjectsEntityPmId, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'pm_id', referencedColumnName: 'userId' })
  usersEntityPmId: UsersEntity;

  @ManyToOne(() => ProjectsEntity, (projectsEntity) => projectsEntity.usersProjectsEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'project_id', referencedColumnName: 'projectId' })
  projectsEntity: ProjectsEntity;
}
