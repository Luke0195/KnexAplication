// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
       database: 'knex',
       user: 'root',
       password: '',
       host:'127.0.0.1'
    },
    migrations:{
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
