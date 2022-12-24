import { Request, Response } from 'express';

export class BuyersController {
  private readonly _service = [];

  async getAllBuyersController(
    _req: Request,
    res: Response
  ): Promise<Response> {
    let allBuyers: Array<Object>;

    try {
      allBuyers = await this._service;
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }

    return res.status(200).json(allBuyers);
  }
}
