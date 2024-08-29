import { UsersRolesEntity } from "src/authen/enities/usersRoles.entity";
import { DepartmentsUsersEntity } from "src/linkTable/entities/departmentsUsers.entity";
import { UsersTechnologiesEntity } from "src/linkTable/entities/usersTechnologies.entity";
import { UsersProjectsEntity } from "src/linkTable/entities/usersProjects.entiety";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TasksEntity } from "src/tasks/entities/tasks.entity";

@Entity('users')
export class UsersEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'user_id' })
    userId: string; 

    @Column({ name: 'login_email', nullable: false })
    loginEmail: string;

    @Column({ name: 'password', nullable: false })
    password: string;

    @Column({ name: 'name', nullable: false })
    name: string;

    @Column({ name: 'birth', nullable: true })
    birth: string;
    
    @Column({ name: 'address', nullable: true })
    address: string;

    @Column({ name: 'citizen_id', nullable: true })
    citizenId: string;

    @Column({ name: 'phone_number', nullable: true })
    phoneNumber: string;

    @Column('simple-array', { name: 'contact_email', nullable: false })
    contactEmail: string[];

    @Column({ name: 'seniority', nullable: true })
    seniority: string;

    @Column('simple-array', { name: 'foreign_language', nullable: true })
    foreignLanguage: string[];

    @Column('simple-array', { name: 'degree', nullable: false })
    degree: string[];
    
    @OneToMany(() => UsersTechnologiesEntity, usersTechnologiesEntity => usersTechnologiesEntity.usersEntity)
    usersTechnologiesEntity: UsersTechnologiesEntity[];

    @OneToMany(() => UsersProjectsEntity, usersProjectsEntity => usersProjectsEntity.usersEntityUserId)
    usersProjectsEntityUserId: UsersProjectsEntity[];

    @OneToMany(() => UsersProjectsEntity, usersProjectsEntity => usersProjectsEntity.usersEntityPmId)
    usersProjectsEntityPmId: UsersProjectsEntity[];

    @OneToMany(() => UsersRolesEntity, usersRolesEntity => usersRolesEntity.usersEntity)
    usersRolesEntity: UsersRolesEntity[];

    @OneToMany(() => DepartmentsUsersEntity, departmentsUsersEntity => departmentsUsersEntity.usersEntityUserId)
    departmentsUsersEntityUserId: DepartmentsUsersEntity[];

    @OneToMany(() => DepartmentsUsersEntity, departmentsUsersEntity => departmentsUsersEntity.usersEntityManagerId)
    departmentsUsersEntityManagerId: DepartmentsUsersEntity[];

    @OneToMany(() => TasksEntity, tasksEntity => tasksEntity.usersEntity)
    tasksEntity: TasksEntity[];
}