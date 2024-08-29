import { UsersEntity } from "src/users/entities/users.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity('departments_users')
export class DepartmentsUsersEntity {
    @PrimaryColumn({ name: 'user_id' })
    userId: string;

    @PrimaryColumn({ name: 'department_id' })
    departmentId: string;

    @PrimaryColumn({ name: 'manager_id' })
    managerId: string;

    @ManyToOne(() => UsersEntity, usersEntity => usersEntity.departmentsUsersEntityUserId, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id', referencedColumnName: 'userId'})
    usersEntityUserId: UsersEntity;

    @ManyToOne(() => UsersEntity, usersEntity => usersEntity.departmentsUsersEntityManagerId, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'manager_id', referencedColumnName: 'userId'})
    usersEntityManagerId: UsersEntity;

}