'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('poststypes', [
      {
        name: 'Evento'
      },
      {
        name: 'Noticia-Kardia'
      },
      {
        name: 'Noticia-deporte'
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('poststypes', null, {});
  }
};
