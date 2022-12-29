import { IOrder } from '../interfaces/IOrder';
import OrdersModel from '../models/OrdersModel';

export class OrdersRepository {
  private readonly _ordersModel = OrdersModel;

  async getAllOrdersRepository() {
    const allOrders = await this._ordersModel.findAll();

    return allOrders;
  }

  async createNewOrderRepository(order: IOrder | any) {
    await this._ordersModel.create(order);
  }
}
