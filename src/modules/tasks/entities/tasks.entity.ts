import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { UsersProjectsEntity } from '../../linkTable/entities/usersProjects.entiety';
import { UsersEntity } from 'src/modules/users/entities/users.entity';
import { ProjectsEntity } from 'src/modules/projects/entities/projects.entity';

export enum TaskStatusEnum {
    inProgress = 'inProgress',
    done = 'done',
}

@Entity('tasks')
export class TasksEntity {
    @PrimaryColumn({ name: 'user_id' })
    userId: string;

    @PrimaryColumn({ name: 'project_id' })
    projectId: string;

    @Column({ name: 'task', nullable: false })
    task: string;

    @Column({
        name: 'task_status',
        nullable: false,
        type: 'enum',
        enum: TaskStatusEnum,
        default: TaskStatusEnum.inProgress,
    })
    taskStatus: TaskStatusEnum;

    @ManyToOne(() => UsersEntity, (usersEntity) => usersEntity.tasksEntity, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id', referencedColumnName: 'userId' })
    usersEntity: UsersEntity;

    @ManyToOne(() => ProjectsEntity, (projectsEntity) => projectsEntity.tasksEntity, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'project_id', referencedColumnName: 'projectId' })
    projectsEntity: ProjectsEntity;
}
