const cls = require('cls-hooked');
const Sequelize = require('sequelize');
let sequelize = null;

class Database {

    constructor (env, dbConfig) {
        this.env = env;
        this.dbConfig = dbConfig;
        this.isTest = this.env === 'test';
        return this
    }

    async connect () {
        const namespace = cls.createNamespace('transactions-namespace');
        Sequelize.useCLS(namespace);
        
        const{username, password, host, port, database, dialect} = this.dbConfig[this.env];

        this.connection = new Sequelize({
            database, 
            username, 
            password, 
            host, 
            port, 
            dialect,
            logging: this.isTestEnv ? false : console.log
        });

        // Check if we connected successfully
        await this.connection.authenticate({logging: false});

        if (!this.isTestEnv) {
            console.log('Connection to the database has been established successfully.');
        }

        // Sync models
        await this.sync();
        return this;
    }

    async disconnect () {
        await this.connection.close();
    }

    async sync () {
        await this.connection.sync({loggin: false, force: this.isTestEnv});
        if (!this.isTestEnv) {
            console.log('Connections synced successfully.');
        }
    }

    getConnection () {
        return this.connection;
    }

}

module.exports = Database;


