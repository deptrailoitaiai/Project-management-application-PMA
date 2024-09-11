import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { DataSourceOptions } from 'typeorm';
import * as glob from 'glob';
import { promisify } from 'util';
dotenv.config();

const MYSQL_HOST = process.env.MYSQL_HOST;
const MYSQL_PORT: number = Number(process.env.MYSQL_PORT);
const MYSQL_USERNAME = process.env.MYSQL_USERNAME;
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
const MYSQL_DATABASE = process.env.MYSQL_DATABASE;

export const TypeOrmConfig: TypeOrmModuleOptions & DataSourceOptions = {
    type: 'mysql',
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    username: MYSQL_USERNAME,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    entities: [path.join(__dirname, '..', 'modules/**/*.entity.ts')],
    migrationsTableName: 'migration_history',
    migrations: [path.join(__dirname, '..', 'database/migrations/*.ts')],
    // synchronize: true,
    logging: true,
    autoLoadEntities: true,
}

// npx ts-node -r tsconfig-paths/register node_modules/typeorm/cli.js migration:generate src/database/migrations/secondMigration -d src/database/datasource.ts