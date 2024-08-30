import { TechnologiesEntity } from 'src/modules/technologies/entities/technologies.entity';
import { UsersEntity } from 'src/modules/users/entities/users.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('users_technologies')
export class UsersTechnologiesEntity {
  @PrimaryColumn({ name: 'user_id' })
  userId: string;

  @PrimaryColumn({ name: 'technology_id' })
  technologyId: string;

  @ManyToOne(() => TechnologiesEntity, (technologiesEntity) => technologiesEntity.usersTechnologiesEntity, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'technology_id', referencedColumnName: 'technologyId' })
  technologiesEntity: TechnologiesEntity;

  @ManyToOne(() => UsersEntity, (usersEntity) => usersEntity.usersTechnologiesEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'userId' })
  usersEntity: UsersEntity;
}
