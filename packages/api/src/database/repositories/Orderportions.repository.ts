import OrderportionsModel from '../models/OrderportionsModel';

export class OrderportionsRepository {
  private readonly _orderportionsModel = OrderportionsModel;

  async getAllOrderportionsRepository() {
    const allOrderportions = await this._orderportionsModel.findAll();

    return allOrderportions;
  }
}
