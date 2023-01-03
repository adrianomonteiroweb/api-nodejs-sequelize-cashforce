import { Request, Response } from 'express';

import { InvoicesService } from '../services/Invoices.services';

export class InvoicesController {
  private readonly _service = new InvoicesService();

  async getAllInvoicesController(
    _req: Request,
    res: Response
  ): Promise<Response> {
    let allInvoices;

    try {
      allInvoices = await this._service.getAllInvoicesService();
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }

    return res
      .header('Access-Control-Allow-Origin', '*')
      .status(200)
      .json(allInvoices);
  }
}
