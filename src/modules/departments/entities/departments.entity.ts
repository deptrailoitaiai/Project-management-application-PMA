import { DepartmentsProjectsEntity } from "src/modules/linkTable/entities/departmentsProjects.entity";
import { UsersEntity } from "src/modules/users/entities/users.entity";
import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToOne(() => UsersEntity, usersEntity => usersEntity.departmentsEntity)
    usersEntity: UsersEntity;

    @OneToOne(() => UsersEntity, usersEntity => usersEntity.departmentsEntityManager)
    usersEntityManagerDepartment: UsersEntity;
}