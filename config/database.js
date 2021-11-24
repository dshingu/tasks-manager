// const Sequelize = require('sequelize');

// const database = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASS, {
//     host: process.env.DB_HOST,
//     dialect: process.env.DB_DRIVER
// });

// module.exports = database;


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
      username: process.env.DB_TEST_USER,
      password: process.env.DB_TEST_PASS,
      database: process.env.DB_TEST,
      host: process.env.DB_TEST_HOST,
      port: parseInt(process.env.DB_TEST_PORT),
      dialect: process.env.DB_TEST_DRIVER,
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
  