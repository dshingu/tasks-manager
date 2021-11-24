const {Sequelize, Model} = require('sequelize');
const {sequelize} = require('../../../bootstrap');
const User = require('./User');


class Token extends Model 
{


}

Token.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    uid: {
        type: Sequelize.INTEGER,
        references: {
            model: {
                model: User,
                key: 'id'
            }
        }
    },
    token: {
        type: Sequelize.TEXT,
    },
}, {
    sequelize,
    modelName: 'Token',
    tableName: 'tokens',
    timestamps: false
});

//Token.belongsTo(User, {foreignKey: 'uid'});

module.exports = Token;