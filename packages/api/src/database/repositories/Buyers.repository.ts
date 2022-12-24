import BuyersModel from '../models/BuyersModel';

export class BuyersRepository {
  private readonly _buyersModel = BuyersModel;

  async getAllBuyersRepository() {
    const allBuyers = await this._buyersModel.findAll();

    return allBuyers;
  }
}
