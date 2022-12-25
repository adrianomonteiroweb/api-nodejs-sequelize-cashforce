import { Request, Response } from 'express';

import { SponsorsService } from '../services/Sponsors.services';

export class SponsorsController {
  private readonly _service = new SponsorsService();

  async getAllSponsorsController(
    _req: Request,
    res: Response
  ): Promise<Response> {
    let allSponsors;

    try {
      allSponsors = await this._service.getAllSponsorsService();
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }

    return res.status(200).json(allSponsors);
  }
}
