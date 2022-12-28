import SponsorsModel from '../models/SponsorsModel';

import { ISponsor } from '../interfaces/ISponsor';

export class SponsorsRepository {
  private readonly _sponsorsModel = SponsorsModel;

  async getAllSponsorsRepository() {
    const allSponsors = await this._sponsorsModel.findAll();

    return allSponsors;
  }

  async createNewSponsorRepository(sponsor: ISponsor | any) {
    await this._sponsorsModel.create(sponsor);
  }
}
