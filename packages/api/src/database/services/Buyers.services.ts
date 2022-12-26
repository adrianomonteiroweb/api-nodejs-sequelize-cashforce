import { BuyersRepository } from '../repositories/Buyers.repository';

import { IBuyer } from '../interfaces/IBuyer';

export class BuyersService {
  private readonly _buyersRepository = new BuyersRepository();

  async getAllBuyersService() {
    const allBuyers = await this._buyersRepository.getAllBuyersRepository();

    return allBuyers;
  }

  async createNewBuyerService(newBuyer: IBuyer) {
    await this._buyersRepository.createNewBuyerRepository(newBuyer);
  }
}
