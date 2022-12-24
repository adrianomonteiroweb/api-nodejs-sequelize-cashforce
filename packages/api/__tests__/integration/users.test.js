const { frisbyFunction } = require('./frisby/frisbyFunction');

describe('* USERS TESTS *', () => {
  it('It must be possible to search for all users in the database.', async () => {
    const resultAllUsers = await frisbyFunction('get', 'users');

    expect(JSON.parse(resultAllUsers._body)).toHaveLength(1);
  });
});
