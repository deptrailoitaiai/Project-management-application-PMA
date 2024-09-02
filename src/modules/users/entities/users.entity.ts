import { UsersRolesEntity } from "src/modules/authen/enities/usersRoles.entity";  
import { UsersTechnologiesEntity } from "src/modules/linkTable/entities/usersTechnologies.entity"; 
import { UsersProjectsEntity } from "src/modules/linkTable/entities/usersProjects.entiety"; 
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { TasksEntity } from "src/modules/tasks/entities/tasks.entity"; 
import { DepartmentsEntity } from "src/modules/departments/entities/departments.entity";

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

    @Column({ name: 'department' })
    department: string;

    @Column({ name: 'manager_department', default: 'none' })
    managerDepartment: string;
    
    @OneToMany(() => UsersTechnologiesEntity, usersTechnologiesEntity => usersTechnologiesEntity.usersEntity)
    usersTechnologiesEntity: UsersTechnologiesEntity[];

    @OneToMany(() => UsersProjectsEntity, usersProjectsEntity => usersProjectsEntity.usersEntityUserId)
    usersProjectsEntityUserId: UsersProjectsEntity[];

    @OneToMany(() => UsersProjectsEntity, usersProjectsEntity => usersProjectsEntity.usersEntityPmId)
    usersProjectsEntityPmId: UsersProjectsEntity[];

    @OneToMany(() => UsersRolesEntity, usersRolesEntity => usersRolesEntity.usersEntity)
    usersRolesEntity: UsersRolesEntity[];

    @OneToOne(() => DepartmentsEntity, departmentsEntity => departmentsEntity.usersEntity)
    @JoinColumn({ name: 'department', referencedColumnName: 'departmentId'})
    departmentsEntity: DepartmentsEntity;

    @OneToOne(() => DepartmentsEntity, departmentsEntity => departmentsEntity.usersEntityManagerDepartment)
    @JoinColumn({ name: 'manager_department', referencedColumnName: 'departmentId'})
    departmentsEntityManager: DepartmentsEntity;

    @OneToMany(() => TasksEntity, tasksEntity => tasksEntity.usersEntity)
    tasksEntity: TasksEntity[];
}