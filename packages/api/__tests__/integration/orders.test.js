const { frisbyFunction } = require('./frisby/frisbyFunction');

describe('* ORDERS TESTS *', () => {
  it('It should be possible to insert a new order using the "orders" route with the "post" method.', async () => {
    const newOrder = {
      orderNfId: '1605181324130',
      orderNumber: '18150',
      orderPath: '',
      orderFileName: '',
      orderOriginalName: '',
      emissionDate: '',
      pdfFile: '',
      emitedTo: '22843980000120',
      nNf: '',
      CTE: '',
      value: '',
      cnpj: '00000000000010',
      userEmail: 'user1@email.com',
      buyerEmail: 'buyer1@email.com',
      providerEmail: 'provider1@email.com',
      orderStatusBuyer: '',
      orderStatusProvider: '',
      deliveryReceipt: '',
      cargoPackingList: '',
      deliveryCtrc: '',
    };

    const resultAllOrdersBefore = await frisbyFunction('get', 'orders');

    await frisbyFunction('post', 'orders', newOrder);

    const resultAllOrdersAfter = await frisbyFunction('get', 'orders');

    expect(JSON.parse(resultAllOrdersAfter._body)).toHaveLength(
      JSON.parse(resultAllOrdersBefore._body).length + 1
    );
  });

  it('It must be possible to search for all orders in the database.', async () => {
    const resultAllOrders = await frisbyFunction('get', 'orders');

    expect(JSON.parse(resultAllOrders._body)).not.toHaveLength(0);
  });
});
