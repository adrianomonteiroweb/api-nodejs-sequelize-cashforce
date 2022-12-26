const { frisbyFunction } = require('./frisby/frisbyFunction');

describe('* CNPJS TESTS *', () => {
  it('It must be possible to search for all CNPJs in the database.', async () => {
    const resultAllCNPJs = await frisbyFunction('get', 'cnpjs');

    expect(JSON.parse(resultAllCNPJs._body)).toHaveLength(2);
  });

  it('It should be possible to insert a new CNPJ using the "cnpjs" route with the "post" method.', async () => {
    const newCNPJ = {
      cnpj: '00000000000007',
      companyType: '1',
    };

    const resultAllCNPJsBefore = await frisbyFunction('get', 'cnpjs');

    await frisbyFunction('post', 'cnpjs', newCNPJ);

    const resultAllCNPJsAfter = await frisbyFunction('get', 'cnpjs');

    expect(JSON.parse(resultAllCNPJsAfter._body)).toHaveLength(
      JSON.parse(resultAllCNPJsBefore._body).length + 1
    );
  });
});
