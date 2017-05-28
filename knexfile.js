const config = require('config');

if (process.env.DATABASE_URL) {
  config.knex.connection.database = process.env.DATABASE_URL;
  config.knex.connection.user = 'viyjyvxbknaejf';
  config.knex.connection.password = 'd5c7ad679dbb518fc5ecf364b3e9a73cb9a55c2f1b351ed164c3052ec36d4e94';
  config.knex.connection.host = 'ec2-23-23-223-2.compute-1.amazonaws.com'
}

console.log(config.knex.connection);

module.exports = config['knex'];
