import { OrderportionsRepository } from '../repositories/Orderportions.repository';

export class OrderportionsService {
  private readonly _orderportionsRepository = new OrderportionsRepository();

  async getAllOrderportionsService() {
    const allOrderportions =
      await this._orderportionsRepository.getAllOrderportionsRepository();

    return allOrderportions;
  }
}
