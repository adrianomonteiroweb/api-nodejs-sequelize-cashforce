const { frisbyFunction } = require('./frisby/frisbyFunction');

describe('* INVOICES TESTS *', () => {
  it('It must be possible to search for all invoices in the database.', async () => {
    const resultAllInvoices = await frisbyFunction('get', 'invoices');

    expect(JSON.parse(resultAllInvoices._body)).not.toHaveLength(0);
  });
});
