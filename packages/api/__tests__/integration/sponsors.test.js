const { frisbyFunction } = require('./frisby/frisbyFunction');

describe('* SPONSORS TESTS *', () => {
  it('It must be possible to search for all sponsors in the database.', async () => {
    const resultAllSponsors = await frisbyFunction('get', 'sponsors');

    expect(JSON.parse(resultAllSponsors._body)).toHaveLength(1);
  });
});
