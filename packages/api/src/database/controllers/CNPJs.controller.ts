import { Request, Response } from 'express';

import { CNPJsService } from '../services/CNPJs.services';

export class CNPJsController {
  private readonly _service = new CNPJsService();

  async getAllCNPJsController(_req: Request, res: Response): Promise<Response> {
    let allCNPJs;

    try {
      allCNPJs = await this._service.getAllCNPJsService();
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }

    return res.status(200).json(allCNPJs);
  }

  async createNewCNPJController(
    req: Request,
    res: Response
  ): Promise<Response> {
    let cnpjIdCreated;

    try {
      cnpjIdCreated = await this._service.createNewCNPJService(req.body);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }

    return cnpjIdCreated
      ? res.status(201).json(cnpjIdCreated)
      : res.status(400).json(0);
  }
}
