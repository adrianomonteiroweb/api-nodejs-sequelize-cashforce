const { frisbyFunction } = require('./frisby/frisbyFunction');

describe('* PROVIDERS TESTS *', () => {
  it('It must be possible to search for all providers in the database.', async () => {
    const resultAllProviders = await frisbyFunction('get', 'providers');

    expect(JSON.parse(resultAllProviders._body)).toHaveLength(1);
  });
});
