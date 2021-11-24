const {Sequelize, Model} = require('sequelize');
const {sequelize} = require('../../../bootstrap');
const User = require('./User');


class PersonalInformation extends Model 
{


}

PersonalInformation.init({
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
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
}, {
    sequelize,
    modelName: 'PersonalInformation',
    tableName: 'personal_informations',
    timestamps: false
});

//PersonalInformation.belongsTo(User, {foreignKey: 'uid'});

module.exports = PersonalInformation;