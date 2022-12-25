import { Request, Response } from 'express';

import { OffersService } from '../services/Offers.services';

export class OffersController {
  private readonly _service = new OffersService();

  async getAllOffersController(
    _req: Request,
    res: Response
  ): Promise<Response> {
    let allOffers;

    try {
      allOffers = await this._service.getAllOffersService();
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }

    return res.status(200).json(allOffers);
  }
}
