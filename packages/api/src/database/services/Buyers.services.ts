import { BuyersRepository } from '../repositories/Buyers.repository';

export class BuyersService {
  private readonly _buyersRepository = new BuyersRepository();

  async getAllBuyersService() {
    const allBuyers = await this._buyersRepository.getAllBuyersRepository();

    return allBuyers;
  }
}
