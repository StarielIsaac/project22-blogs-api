'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      display_name: {
        type: Sequelize.STRING(200),
      },
      email: {
        type: Sequelize.STRING(200),
      },
      password: {
        type: Sequelize.STRING(200),
      },     
      image: {
        allowNull: true,
        type: Sequelize.STRING(200),
      },     
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('users');
  },
};