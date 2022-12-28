import { SponsorsRepository } from '../repositories/Sponsors.repository';

import { ISponsor } from '../interfaces/ISponsor';
import { CNPJsRepository } from '../repositories/CNPJs.repository';

export class SponsorsService {
  private readonly _sponsorsRepository = new SponsorsRepository();
  private readonly _CNPJRepository = new CNPJsRepository();

  async getAllSponsorsService() {
    const allSponsors =
      await this._sponsorsRepository.getAllSponsorsRepository();

    return allSponsors;
  }

  async createNewSponsorService(sponsor: ISponsor) {
    const { cnpj, companyType, ...rest } = sponsor;

    const idByCNPJ = await this._CNPJRepository.getIdByCNPJRepository(cnpj);

    const cnpjIdCreated = idByCNPJ
      ? idByCNPJ
      : await this._CNPJRepository.createNewCNPJRepository({
          cnpj,
          companyType,
        });

    const newSponsor = { ...rest, cnpjId: cnpjIdCreated };

    await this._sponsorsRepository.createNewSponsorRepository(newSponsor);
  }
}
