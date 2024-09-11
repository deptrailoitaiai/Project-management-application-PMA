import { MigrationInterface, QueryRunner } from "typeorm";

export class SecondMigration1725875412797 implements MigrationInterface {
    name = 'SecondMigration1725875412797'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`test\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`test\``);
    }

}
