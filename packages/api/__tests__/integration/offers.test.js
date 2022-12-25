const { frisbyFunction } = require('./frisby/frisbyFunction');

describe('* OFFERS TESTS *', () => {
  it('It must be possible to search for all offers in the database.', async () => {
    const resultAllOffers = await frisbyFunction('get', 'offers');

    expect(JSON.parse(resultAllOffers._body)).toHaveLength(0);
  });
});
