import { OffersRepository } from '../repositories/Offers.repository';

export class OffersService {
  private readonly _offersRepository = new OffersRepository();

  async getAllOffersService() {
    const allOffers = await this._offersRepository.getAllOffersRepository();

    return allOffers;
  }
}
