import BuyersModel from '../models/BuyersModel';

import { IBuyer } from '../interfaces/IBuyer';

export class BuyersRepository {
  private readonly _buyersModel = BuyersModel;

  async getAllBuyersRepository() {
    const allBuyers = await this._buyersModel.findAll();

    return allBuyers;
  }

  async createNewBuyerRepository(newBuyer: IBuyer | any) {
    await this._buyersModel.create(newBuyer);
  }

  async getIdByBuyerEmailRepository(email: string) {
    const idByBuyerEmail = await this._buyersModel.findOne({
      where: { email },
    });

    return idByBuyerEmail?.dataValues.id
      ? idByBuyerEmail?.dataValues.id
      : false;
  }
}
