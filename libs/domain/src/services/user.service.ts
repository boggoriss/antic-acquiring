import { CrudService } from './base-crud/crud.service';
import User from '../entities/user.entity';

export class UserService extends CrudService(User) {}

