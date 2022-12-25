import { Request, Response } from 'express';

import { OrderportionsService } from '../services/Orderportions.services';

export class OrderportionsController {
  private readonly _service = new OrderportionsService();

  async getAllOrderportionsController(
    _req: Request,
    res: Response
  ): Promise<Response> {
    let allOrderportions;

    try {
      allOrderportions = await this._service.getAllOrderportionsService();
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }

    return res.status(200).json(allOrderportions);
  }
}
