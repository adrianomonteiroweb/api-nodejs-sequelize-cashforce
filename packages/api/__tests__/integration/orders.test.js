const { frisbyFunction } = require('./frisby/frisbyFunction');

describe('* ORDERS TESTS *', () => {
  it('It must be possible to search for all orders in the database.', async () => {
    const resultAllOrders = await frisbyFunction('get', 'orders');

    expect(JSON.parse(resultAllOrders._body)).toHaveLength(3);
  });
});
