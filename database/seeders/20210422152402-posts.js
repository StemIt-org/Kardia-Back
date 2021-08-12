'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('posts', [
      {
        title: 'Test',
        body: 'Un test de post', 
        extra: 'Un test de extra',
        createdAt: new Date(),
        postTypeId: 1
      },
      {
        title: 'Test2',
        body: 'Un test de post2', 
        extra: 'Un test de extra2',
        createdAt: new Date(),
        postTypeId: 2
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('posts', null, {});
  }
};
