const frisby = require('frisby');
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '../../../../.env') });

const uri =
  process.env.NODE_ENV === 'test'
    ? `http://${process.env.HOST}:${process.env.PORT}`
    : process.env.DEPLOY_URI;

describe('* BUYERS TESTS *', () => {
  it('It must be possible to search for all buyers in the database.', async () => {
    const resultAllBuyers = await frisby
      .get(`${uri}/buyers`)
      .expect('status', 200);

    expect(JSON.parse(resultAllBuyers._body)).toHaveLength(1);
  });
});
