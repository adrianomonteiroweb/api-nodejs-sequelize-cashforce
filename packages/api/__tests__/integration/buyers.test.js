const { frisbyFunction } = require('./frisby/frisbyFunction');

describe('* BUYERS TESTS *', () => {
  it('It must be possible to search for all buyers in the database.', async () => {
    const resultAllBuyers = await frisbyFunction('get', 'buyers');

    expect(JSON.parse(resultAllBuyers._body)).toHaveLength(1);
  });
});
