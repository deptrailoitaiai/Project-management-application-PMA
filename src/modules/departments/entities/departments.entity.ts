import { DepartmentsProjectsEntity } from "src/modules/linkTable/entities/departmentsProjects.entity";
import { UsersEntity } from "src/modules/users/entities/users.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('departments')
export class DepartmentsEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'department_id' })
    departmentId: string;

    @Column({ name: 'department', nullable: false })
    department: string;

    @Column({ name: 'description', nullable: false })
    description: string; 

    @CreateDateColumn({ name: 'founding_date' })
    foundingDate: Date;

    @OneToMany(() => DepartmentsProjectsEntity, departmentsProjectsEntity => departmentsProjectsEntity.departmentsEntity)
    departmentsProjectsEntity: DepartmentsProjectsEntity[];

    @OneToMany(() => UsersEntity, usersEntity => usersEntity.departmentsEntity)
    usersEntity: UsersEntity[];

    @OneToMany(() => UsersEntity, usersEntity => usersEntity.departmentsEntityManager)
    usersEntityManagerDepartment: UsersEntity[];
}