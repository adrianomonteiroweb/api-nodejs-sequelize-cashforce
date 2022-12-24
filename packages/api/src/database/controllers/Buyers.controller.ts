import { Request, Response } from 'express';

import { BuyersService } from '../services/Buyers.services';

export class BuyersController {
  private readonly _service = new BuyersService();

  async getAllBuyersController(
    _req: Request,
    res: Response
  ): Promise<Response> {
    let allBuyers;

    try {
      allBuyers = await this._service.getAllBuyersService();
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }

    return res.status(200).json(allBuyers);
  }
}
