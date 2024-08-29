import { DepartmentsProjectsEntity } from "src/linkTable/entities/departmentsProjects.entity";
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
}