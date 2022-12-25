const { frisbyFunction } = require('./frisby/frisbyFunction');

describe('* CNPJS TESTS *', () => {
  it('It must be possible to search for all CNPJs in the database.', async () => {
    const resultAllCNPJs = await frisbyFunction('get', 'cnpjs');

    expect(JSON.parse(resultAllCNPJs._body)).toHaveLength(2);
  });
});
