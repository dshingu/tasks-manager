require('dotenv').config();

module.exports = {
    development: {
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: process.env.DB_DRIVER,
      dialectOptions: {
        bigNumberStrings: true
      }
    },
    test: {
      username: process.env.CI_DB_USERNAME,
      password: process.env.CI_DB_PASSWORD,
      database: process.env.CI_DB_NAME,
      host: '127.0.0.1',
      port: 3306,
      dialect: 'mysql',
      dialectOptions: {
        bigNumberStrings: true
      }
    },
    production: {
      username: process.env.PROD_DB_USERNAME,
      password: process.env.PROD_DB_PASSWORD,
      database: process.env.PROD_DB_NAME,
      host: process.env.PROD_DB_HOSTNAME,
      port: process.env.PROD_DB_PORT,
      dialect: 'mysql',
      dialectOptions: {
        bigNumberStrings: true,
      }
    }
  };