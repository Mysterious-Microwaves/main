# Project Name

Pledgeit is an online crowd-funding platform that empowers charities to be more innovate and entrepreneurial. Pledgeit aims to lower the barrier of entry for charitable endeavors, in order to increase the flow of new ideas that are implemented.

## Team

- Ming Feng
- Ali Elgiadi
- Oliver Ullman
- Kriz Cortes

## Roadmap

View the project roadmap [here](https://docs.google.com/document/d/1Uc6yfhYeWaZFlB6Q7AkCwsTridQs7q7b_kHSwMbx0tY/edit)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

# Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)

## Usage

> Some usage instructions

## Requirements

- Node 6.9.x
- Redis 3.2.x
- Postgresql 9.6.x
- Bookshelf
- Knex
- React
- React Router
- Docker
- Passport
- Mailgun Mail Service

## Development

```
Because Pledgeit relies on multiple microservices, just starting the main repo (the current one) is not enough. At the bare minimum, you must also start the funded microservice. 

For a barebones setup (development):

- Yarn run build (in main repo)
- Yarn run start (in main repo)
- Yarn run start (in funded repo)
Your port will be 3000

For a full development setup, run docker-compose up in the main repo

For a full production setup, go to the docker-compose file (in the main repo) and under web change command from dockerinit to dockerinitprod

```

### Installing System Dependencies

```
brew install yarn
brew install redis
brew install postgresql
```

Yarn is a replacement for npm. It's faster and *guarantees* consistency -- as you deploy your code in various environments, you won't run the risk of slight variations in what gets installed.

### Install Project Dependencies

```
yarn global add grunt-cli knex eslint
```

## Database Initialization

IMPORTANT: ensure `postgres` is running before performing these steps.

### Database Creation:

Use grunt to create a new database for your development and test environments:

Development envronment: `grunt pgcreatedb:default`

Other environments, specify like so: `NODE_ENV=test grunt pgcreatedb:default`

### Run Migrations & Data Seeds

In terminal, from the root directory:

`knex migrate:latest --env NODE_ENV`

`knex migrate:rollback --env NODE_ENV`

`knex seed:run --env NODE_ENV`

Note: `--env NODE_ENV` may be omitted for development. For example, `knex migrate:latest` will run all migrations in the development environment, while `knex migrate:latest --env test` will migrate in the test environment.

## Running the App

To run webpack build: `yarn run build`

To run server: `yarn run start`

To run tests: `yarn run test`

To run your redis server for the session store `redis-server`


