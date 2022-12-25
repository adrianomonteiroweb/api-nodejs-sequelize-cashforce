import { SponsorsRepository } from '../repositories/Sponsors.repository';

export class SponsorsService {
  private readonly _sponsorsRepository = new SponsorsRepository();

  async getAllSponsorsService() {
    const allSponsors =
      await this._sponsorsRepository.getAllSponsorsRepository();

    return allSponsors;
  }
}
