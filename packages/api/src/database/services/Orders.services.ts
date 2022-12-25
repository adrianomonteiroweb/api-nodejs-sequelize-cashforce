import { OrdersRepository } from '../repositories/Orders.repository';

export class OrdersService {
  private readonly _ordersRepository = new OrdersRepository();

  async getAllOrdersService() {
    const allOrders = await this._ordersRepository.getAllOrdersRepository();

    return allOrders;
  }
}
