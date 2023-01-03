import OrdersModel from '../models/OrdersModel';
import BuyersModel from '../models/BuyersModel';
import ProvidersModel from '../models/ProvidersModel';

export class InvoicesRepository {
  private readonly _ordersModel = OrdersModel;
  private readonly _buyersModel = BuyersModel;
  private readonly _providersModel = ProvidersModel;

  async getAllInvoices() {
    const getAllInvoices = await this._ordersModel.findAll({
      include: [
        { model: this._buyersModel, as: 'buyer' },
        { model: this._providersModel, as: 'provider' },
      ],
    });

    return getAllInvoices;
  }
}
