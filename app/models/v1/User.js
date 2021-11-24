const {Sequelize, Model} = require('sequelize');
const {sequelize} = require('../../../bootstrap');
const bcrypt = require('bcrypt');
const PersonalInformation = require('./PersonalInformation');
const Token = require('./Token');


class User extends Model 
{

    associate (models) {
        
    }

    static async hashPassword(password) {
        const ROUNDS = parseInt(process.env.SALT_ROUNDS);
        return bcrypt.hash(password, ROUNDS);
    }

    static async addNewUser({
        username,
        first_name,
        last_name,
        email,
        secret_key,
        token
    }) {

        return sequelize.transaction(async () => {
            return User.create({
                username: username,
                secret_key: secret_key,
                PersonalInformation: {
                    first_name: first_name,
                    last_name: last_name,
                    email: email
                },
                Token: {
                    token: token
                }
            },  {
                include: [PersonalInformation, Token]
            });
        });

    }

}

User.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING(50),
        unique: true,
        allowNull: false
    },
    secret_key: {
        type: Sequelize.STRING,
        allowNull: false
    },
    verified: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 0
    }
}, {
    sequelize,
    modelName: 'User',
    timestamps: false
});

User.beforeCreate(async (user, options) => {
    user.secret_key = await User.hashPassword(user.secret_key);
});

User.afterCreate((user, options) => {
    delete user.dataValues.secret_key;
});

User.hasOne(PersonalInformation, { foreignKey: 'uid'});
User.hasOne(Token, { foreignKey: 'uid'});



module.exports = User;