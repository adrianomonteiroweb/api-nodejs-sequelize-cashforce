const { frisbyFunction } = require('./frisby/frisbyFunction');

describe('* PROVIDERS TESTS *', () => {
  it('It should be possible to insert a new provider using the "providers" route with the "post" method.', async () => {
    const newProvider = {
      name: 'Provider 1',
      tradingName: 'PROVIDER 001 LTDA',
      cashforceTax: '',
      responsibleName: '',
      responsibleEmail: '',
      responsiblePosition: '',
      responsiblePhone: '',
      responsibleMobile: '',
      website: '',
      postalCode: '',
      address: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      bank: '',
      bankAgency: '',
      account: '',
      documents: '',
      phoneNumber: '',
      situation: '',
      situationDate: '',
      email: '',
      cnpj: '00000000000010',
      companyType: '1',
    };

    const resultAllProvidersBefore = await frisbyFunction('get', 'providers');

    await frisbyFunction('post', 'providers', newProvider);

    const resultAllProvidersAfter = await frisbyFunction('get', 'providers');

    expect(JSON.parse(resultAllProvidersAfter._body)).toHaveLength(
      JSON.parse(resultAllProvidersBefore._body).length + 1
    );
  });

  it('It must be possible to search for all providers in the database.', async () => {
    const resultAllProviders = await frisbyFunction('get', 'providers');

    expect(JSON.parse(resultAllProviders._body)).not.toHaveLength(0);
  });
});
