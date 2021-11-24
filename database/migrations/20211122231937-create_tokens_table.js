'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('tokens', {
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
      token: {
        type: Sequelize.TEXT
      }
    });

  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.dropTable('tokens');

  }
};
