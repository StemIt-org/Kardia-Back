'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('posts', 'images');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('posts', 'images');
  }
};
