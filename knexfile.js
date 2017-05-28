const config = require('config');

if (process.env.DATABASE_URL) {
  config.knex.connection.database = process.env.DATABASE_URL;
}

console.log(config.knex.connection);

module.exports = config['knex'];
