const { frisbyFunction } = require('./frisby/frisbyFunction');

describe('* CNPJS TESTS *', () => {
  it('It should be possible to insert a new CNPJ using the "cnpjs" route with the "post" method.', async () => {
    const resultAllCNPJsBefore = await frisbyFunction('get', 'cnpjs');

    const newCNPJ = {
      cnpj:
        JSON.parse(resultAllCNPJsBefore._body).length > 9
          ? '00000000000000'.slice(0, -2) +
            `${JSON.parse(resultAllCNPJsBefore._body).length}`
          : '00000000000000'.slice(0, -1) +
            `${JSON.parse(resultAllCNPJsBefore._body).length}`,
      companyType: '1',
    };

    await frisbyFunction('post', 'cnpjs', newCNPJ);

    const resultAllCNPJsAfter = await frisbyFunction('get', 'cnpjs');

    expect(JSON.parse(resultAllCNPJsAfter._body)).toHaveLength(
      JSON.parse(resultAllCNPJsBefore._body).length + 1
    );
  });

  it('It must be possible to search for all CNPJs in the database.', async () => {
    const resultAllCNPJs = await frisbyFunction('get', 'cnpjs');

    expect(JSON.parse(resultAllCNPJs._body)).not.toHaveLength(0);
  });
});
