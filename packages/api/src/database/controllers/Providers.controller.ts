import { Request, Response } from 'express';

import { ProvidersService } from '../services/Providers.services';

export class ProvidersController {
  private readonly _service = new ProvidersService();

  async getAllProvidersController(
    _req: Request,
    res: Response
  ): Promise<Response> {
    let allProviders;

    try {
      allProviders = await this._service.getAllProvidersService();
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }

    return res.status(200).json(allProviders);
  }

  async createNewProviderController(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      await this._service.createNewProviderService(req.body);

      res.status(201).json({ message: 'Provider created successfully' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}
