'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('poststypes', [
      {
        name: 'Evento'
      },
      {
        name: 'Noticia'
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('poststypes', null, {});
  }
};
