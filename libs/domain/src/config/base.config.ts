import { DataSourceOptions, DefaultNamingStrategy } from 'typeorm';

export const baseConfig: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'antic',
    synchronize: false,
    migrationsRun: false,
    logging: false,
    namingStrategy: new DefaultNamingStrategy(),
    migrationsTableName: 'migrations',
};
