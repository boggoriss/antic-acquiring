import { DataSourceOptions } from 'typeorm';
import { baseConfig } from './base.config';
import { entities } from '../entities';

export const config: DataSourceOptions = {
    ...baseConfig,
    entities: entities,
};
