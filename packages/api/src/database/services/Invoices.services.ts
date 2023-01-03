import { InvoicesRepository } from '../repositories/Invoices.repository';

export class InvoicesService {
  private readonly _InvoicesRepository = new InvoicesRepository();

  async getAllInvoicesService() {
    const allInvoices = await this._InvoicesRepository.getAllInvoices();

    return allInvoices;
  }
}
