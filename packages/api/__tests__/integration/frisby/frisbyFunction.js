const frisby = require('frisby');
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '../../../../../.env') });

const baseURI =
  process.env.NODE_ENV === 'test'
    ? `http://${process.env.HOST}:${process.env.PORT}`
    : process.env.DEPLOY_URI;

exports.frisbyFunction = async (method, alias, id = '') =>
  await frisby[method](`${baseURI}/${alias}/${id}`);
