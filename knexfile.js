const config = require('config');

if (process.env.DATABASE_URL) {
  config.knex.database = process.env.DATABASE_URL;
}

console.log(config);

module.exports = config['knex'];
