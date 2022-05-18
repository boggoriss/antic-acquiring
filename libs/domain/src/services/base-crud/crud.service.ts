import { DeepPartial, FindManyOptions, Repository, FindOneOptions, SaveOptions } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import BaseEntity from '../../entities/base/base.entity';
import { Constructor } from '@lib/base-helper';
import { Type } from '@nestjs/common';

export interface ICrudService<T> {
    findOne: (id: string) => Promise<T>;
    findOneOptionally: (options?: FindOneOptions<T>) => Promise<T>;
    findAll: (options?: FindManyOptions<T>) => Promise<T[]>;
    save: <U extends DeepPartial<T>>(object: U, options?: SaveOptions) => Promise<T>;
}

export function CrudService<T extends Pick<BaseEntity, 'id'>>(entity: Constructor<T>): Type<ICrudService<T>> {
    class CrudServiceHost implements ICrudService<T> {
        @InjectRepository(entity)
        private readonly repository: Repository<T>;
        entityConstructor: Constructor<T> = entity;

        async findOne(id: any): Promise<T> {
            return await this.repository.findOne({ where: { id } });
        }

        async findOneOptionally(options?: FindOneOptions<T>): Promise<T> {
            return await this.repository.findOne(options);
        }

        async findAll(options?: FindManyOptions): Promise<T[]> {
            return await this.repository.find(options);
        }

        async save<U extends DeepPartial<T>>(object: U, options?: SaveOptions): Promise<T> {
            return await this.repository.save(object, options);
        }

        public createEntity(entityData: DeepPartial<T>[] | DeepPartial<T>): T[] | T {
            return Array.isArray(entityData)
                ? this.repository.create(<DeepPartial<T>[]>entityData)
                : this.repository.create(<DeepPartial<T>>entityData);
        }
    }

    return CrudServiceHost;
}
