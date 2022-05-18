import { DataSource, DataSourceOptions } from 'typeorm';

export const migrationConfigOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'antic',
    entities: ["libs/domain/src/entities/**/*.entity.ts"],
    synchronize: false,
    migrations: ["migrations/*.ts"],
    migrationsTransactionMode: 'none'
};

export const migrationConfig = new DataSource(migrationConfigOptions);
