import { BuyersRepository } from '../repositories/Buyers.repository';

import { IBuyer } from '../interfaces/IBuyer';
import { CNPJsRepository } from '../repositories/CNPJs.repository';

export class BuyersService {
  private readonly _buyersRepository = new BuyersRepository();
  private readonly _CNPJRepository = new CNPJsRepository();

  async getAllBuyersService() {
    const allBuyers = await this._buyersRepository.getAllBuyersRepository();

    return allBuyers;
  }

  async createNewBuyerService(buyer: IBuyer) {
    const { cnpj, companyType, ...rest } = buyer;

    const idByCNPJ = await this._CNPJRepository.getIdByCNPJRepository(cnpj);

    const cnpjIdCreated = idByCNPJ
      ? idByCNPJ
      : await this._CNPJRepository.createNewCNPJRepository({
          cnpj,
          companyType,
        });

    const newBuyer = { ...rest, cnpjId: cnpjIdCreated };

    await this._buyersRepository.createNewBuyerRepository(newBuyer);
  }
}
