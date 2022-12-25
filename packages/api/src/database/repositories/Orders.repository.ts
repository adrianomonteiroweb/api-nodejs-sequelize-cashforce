import OrdersModel from '../models/OrdersModel';

export class OrdersRepository {
  private readonly _ordersModel = OrdersModel;

  async getAllOrdersRepository() {
    const allOrders = await this._ordersModel.findAll();

    return allOrders;
  }
}
