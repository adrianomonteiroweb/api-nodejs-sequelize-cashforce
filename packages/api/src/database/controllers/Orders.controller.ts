import { Request, Response } from 'express';

import { OrdersService } from '../services/Orders.services';

export class OrdersController {
  private readonly _service = new OrdersService();

  async getAllOrdersController(
    _req: Request,
    res: Response
  ): Promise<Response> {
    let allOrders;

    try {
      allOrders = await this._service.getAllOrdersService();
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }

    return res.status(200).json(allOrders);
  }
}
