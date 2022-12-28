const { frisbyFunction } = require('./frisby/frisbyFunction');

describe('* USERS TESTS *', () => {
  it('It should be possible to insert a new user using the "users" route with the "post" method', async () => {
    const newUser = {
      name: 'user 1',
      email: 'user1@email.com',
      phoneNumber: '',
      mobile: '',
      departament: '',
      verificationCode: '',
      emailChecked: 0,
      cashforceAdm: 0,
    };

    const resultAllUsersBefore = await frisbyFunction('get', 'users');

    await frisbyFunction('post', 'users', newUser);

    const resultAllUsersAfter = await frisbyFunction('get', 'users');

    expect(JSON.parse(resultAllUsersAfter._body)).toHaveLength(
      JSON.parse(resultAllUsersBefore._body).length + 1
    );
  });

  it('It must be possible to search for all users in the database.', async () => {
    const resultAllUsers = await frisbyFunction('get', 'users');

    expect(JSON.parse(resultAllUsers._body)).not.toHaveLength(0);
  });
});
