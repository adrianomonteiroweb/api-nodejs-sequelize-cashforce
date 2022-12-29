import { CNPJsRepository } from '../repositories/CNPJs.repository';
import { OrdersRepository } from '../repositories/Orders.repository';
import { UsersRepository } from '../repositories/Users.repository';
import { BuyersRepository } from '../repositories/Buyers.repository';
import { ProvidersRepository } from '../repositories/Providers.repository';

import { IOrder } from '../interfaces/IOrder';

export class OrdersService {
  private readonly _ordersRepository = new OrdersRepository();
  private readonly _CNPJsRepository = new CNPJsRepository();
  private readonly _usersRepository = new UsersRepository();
  private readonly _buyersRepository = new BuyersRepository();
  private readonly _providersRepository = new ProvidersRepository();

  async getAllOrdersService() {
    const allOrders = await this._ordersRepository.getAllOrdersRepository();

    return allOrders;
  }

  async createNewOrderService(order: IOrder) {
    const { cnpj, userEmail, buyerEmail, providerEmail, ...rest } = order;

    const idByCNPJ = await this._CNPJsRepository.getIdByCNPJRepository(cnpj);
    const idByUserEmail =
      await this._usersRepository.getIdByUserEmailRepository(userEmail);
    const idByBuyerEmail =
      await this._buyersRepository.getIdByBuyerEmailRepository(buyerEmail);
    const idByProviderEmail =
      await this._providersRepository.getIdByProviderEmailRepository(
        providerEmail
      );

    const newOrder = {
      ...rest,
      cnpjId: idByCNPJ,
      userId: idByUserEmail,
      buyerId: idByBuyerEmail,
      providerId: idByProviderEmail,
    };

    await this._ordersRepository.createNewOrderRepository(newOrder);
  }
}
