const { frisbyFunction } = require('./frisby/frisbyFunction');

describe('* ORDERPORTIONS TESTS *', () => {
  it('It must be possible to search for all orderportions in the database.', async () => {
    const resultAllOrderportions = await frisbyFunction('get', 'orderportions');

    expect(JSON.parse(resultAllOrderportions._body)).toHaveLength(0);
  });
});
