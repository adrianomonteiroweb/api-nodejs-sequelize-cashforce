import CNPJsModel from '../models/CNPJsModel';

import { ICNPJ } from '../interfaces/ICNPJ';

export class CNPJsRepository {
  private readonly _CNPJsModel = CNPJsModel;

  async getAllCNPJsRepository() {
    const allCNPJs = await this._CNPJsModel.findAll();

    return allCNPJs;
  }

  async createNewCNPJRepository(newCNPJ: ICNPJ | any) {
    const cnpjCreated = await this._CNPJsModel.create(newCNPJ);

    return cnpjCreated.dataValues.id ? cnpjCreated.dataValues.id : false;
  }

  async getIdByCNPJRepository(cnpj: string) {
    const idByCNPJ = await this._CNPJsModel.findOne({ where: { cnpj } });

    return idByCNPJ?.dataValues.id ? idByCNPJ?.dataValues.id : false;
  }
}
