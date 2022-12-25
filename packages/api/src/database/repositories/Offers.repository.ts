import OffersModel from '../models/OffersModel';

export class OffersRepository {
  private readonly _offersModel = OffersModel;

  async getAllOffersRepository() {
    const allOffers = await this._offersModel.findAll();

    return allOffers;
  }
}
