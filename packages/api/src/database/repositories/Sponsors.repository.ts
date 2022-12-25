import SponsorsModel from '../models/SponsorsModel';

export class SponsorsRepository {
  private readonly _sponsorsModel = SponsorsModel;

  async getAllSponsorsRepository() {
    const allSponsors = await this._sponsorsModel.findAll();

    return allSponsors;
  }
}
