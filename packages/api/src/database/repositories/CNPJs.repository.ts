import CNPJsModel from '../models/CNPJsModel';

export class CNPJsRepository {
  private readonly _CNPJsModel = CNPJsModel;

  async getAllCNPJsRepository() {
    const allCNPJs = await this._CNPJsModel.findAll();

    return allCNPJs;
  }
}
