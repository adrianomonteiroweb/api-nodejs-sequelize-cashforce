const { frisbyFunction } = require('./frisby/frisbyFunction');

describe('* BUYERS TESTS *', () => {
  it('It should be possible to insert a new buyer using the "buyers" route with the "post" method.', async () => {
    const newBuyer = {
      name: 'SACADO 002',
      tradingName: 'SACADO 002 LTDA',
      cashforceTax: '0',
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
      phoneNumber: '',
      situation: '',
      situationDate: '',
      confirm: 2,
      email: '',
      cnpj: '00000000000010',
      companyType: '1',
    };

    const resultAllBuyersBefore = await frisbyFunction('get', 'buyers');

    await frisbyFunction('post', 'buyers', newBuyer);

    const resultAllBuyersAfter = await frisbyFunction('get', 'buyers');

    expect(JSON.parse(resultAllBuyersAfter._body)).toHaveLength(
      JSON.parse(resultAllBuyersBefore._body).length + 1
    );
  });

  it('It must be possible to search for all buyers in the database.', async () => {
    const resultAllBuyers = await frisbyFunction('get', 'buyers');

    expect(JSON.parse(resultAllBuyers._body)).not.toHaveLength(0);
  });
});
