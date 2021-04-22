'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('poststypes', {
      id: {
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER,
    },
      name: Sequelize.STRING
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('poststypes')
  }
};
