import { ProvidersRepository } from '../repositories/Providers.repository';

export class ProvidersService {
  private readonly _providersRepository = new ProvidersRepository();

  async getAllProvidersService() {
    const allProviders =
      await this._providersRepository.getAllProvidersRepository();

    return allProviders;
  }
}
