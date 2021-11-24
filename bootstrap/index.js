const dbConfig = require('../config/database');
const Database = require('../database');
const environment = require('../config/environment');

const db = new Database(environment.nodeEnv, dbConfig);
      db.connect();
const _connection = db.getConnection();

module.exports = {
    sequelize: _connection
}
