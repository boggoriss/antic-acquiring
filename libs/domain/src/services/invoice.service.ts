import { CrudService } from './base-crud/crud.service';
import Invoice from '@lib/domain/entities/invoice.entity';

export class InvoiceService extends CrudService<Invoice>(Invoice) {}
