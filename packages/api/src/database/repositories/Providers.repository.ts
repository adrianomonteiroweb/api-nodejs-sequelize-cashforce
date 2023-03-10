import ProvidersModel from '../models/ProvidersModel';

import { IProvider } from '../interfaces/IProvider';

export class ProvidersRepository {
  private readonly _providersModel = ProvidersModel;

  async getAllProvidersRepository() {
    const allProviders = await this._providersModel.findAll();

    return allProviders;
  }

  async createNewProviderRepository(provider: IProvider | any) {
    await this._providersModel.create(provider);
  }

  async getIdByProviderEmailRepository(email: string) {
    const idByProviderEmail = await this._providersModel.findOne({
      where: { email },
    });

    return idByProviderEmail?.dataValues.id
      ? idByProviderEmail?.dataValues.id
      : false;
  }
}
