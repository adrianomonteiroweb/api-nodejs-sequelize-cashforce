import { ProvidersRepository } from '../repositories/Providers.repository';
import { CNPJsRepository } from '../repositories/CNPJs.repository';

import { IProvider } from '../interfaces/IProvider';

export class ProvidersService {
  private readonly _providersRepository = new ProvidersRepository();
  private readonly _CNPJRepository = new CNPJsRepository();

  async getAllProvidersService() {
    const allProviders =
      await this._providersRepository.getAllProvidersRepository();

    return allProviders;
  }

  async createNewProviderService(sponsor: IProvider) {
    const { cnpj, companyType, ...rest } = sponsor;

    const idByCNPJ = await this._CNPJRepository.getIdByCNPJRepository(cnpj);

    const cnpjIdCreated = idByCNPJ
      ? idByCNPJ
      : await this._CNPJRepository.createNewCNPJRepository({
          cnpj,
          companyType,
        });

    const newProvider = { ...rest, cnpjId: cnpjIdCreated };

    await this._providersRepository.createNewProviderRepository(newProvider);
  }
}
