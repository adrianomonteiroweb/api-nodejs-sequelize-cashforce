const { frisbyFunction } = require('./frisby/frisbyFunction');

describe('* SPONSORS TESTS *', () => {
  it('It should be possible to insert a new sponsor using the "sponsors" route with the "post" method.', async () => {
    const newSponsor = {
      name: 'Sponsor 1',
      tradingName: '',
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
      phoneNumber: '',
      situation: '',
      situationDate: '',
      email: '',
      cnpj: '00000000000010',
      companyType: '1',
    };

    const resultAllSponsorsBefore = await frisbyFunction('get', 'sponsors');

    await frisbyFunction('post', 'sponsors', newSponsor);

    const resultAllSponsorsAfter = await frisbyFunction('get', 'sponsors');

    expect(JSON.parse(resultAllSponsorsAfter._body)).toHaveLength(
      JSON.parse(resultAllSponsorsBefore._body).length + 1
    );
  });

  it('It must be possible to search for all sponsors in the database.', async () => {
    const resultAllSponsors = await frisbyFunction('get', 'sponsors');

    expect(JSON.parse(resultAllSponsors._body)).not.toHaveLength(0);
  });
});
