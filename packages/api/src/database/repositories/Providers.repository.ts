import ProvidersModel from '../models/ProvidersModel';

export class ProvidersRepository {
  private readonly _providersModel = ProvidersModel;

  async getAllProvidersRepository() {
    const allProviders = await this._providersModel.findAll();

    return allProviders;
  }
}
