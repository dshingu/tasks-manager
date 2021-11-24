'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      username:{
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
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.dropTable('users');

  }
};
