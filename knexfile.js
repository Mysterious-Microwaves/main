const config = require('config');

if (process.env.DATABASE_URL) {
  config.knex.connection = process.env.DATABASE_URL;
}

console.log(config.knex.connection);

module.exports = config['knex'];
