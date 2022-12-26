import { CNPJsRepository } from '../repositories/CNPJs.repository';

import { ICNPJ } from '../interfaces/ICNPJ';

export class CNPJsService {
  private readonly _CNPJsRepository = new CNPJsRepository();

  async getAllCNPJsService() {
    const allCNPJs = await this._CNPJsRepository.getAllCNPJsRepository();

    return allCNPJs;
  }

  async createNewCNPJService(newCNPJ: ICNPJ) {
    const cnpjIdCreated = await this._CNPJsRepository.createNewCNPJRepository(
      newCNPJ
    );

    return cnpjIdCreated ? cnpjIdCreated : false;
  }
}
