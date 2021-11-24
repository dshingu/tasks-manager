'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('personal_informations', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      uid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'users',
            key: 'id'
          }
        }
      },
      first_name: {
        type: Sequelize.STRING(60),
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING(90),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      }
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.dropTable('personal_informations');

  }
};
