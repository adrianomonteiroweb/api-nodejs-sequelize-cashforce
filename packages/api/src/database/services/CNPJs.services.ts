import { CNPJsRepository } from '../repositories/CNPJs.repository';

export class CNPJsService {
  private readonly _CNPJsRepository = new CNPJsRepository();

  async getAllCNPJsService() {
    const allCNPJs = await this._CNPJsRepository.getAllCNPJsRepository();

    return allCNPJs;
  }
}
