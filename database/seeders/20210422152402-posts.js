'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('posts', [
      {
        title: 'Test',
        body: 'Un test de post', 
        extra: 'Un test de extra',
        // images: 'Por ahora sin images',
        createdAt: new Date(),
        postTypeId: 1
      },
      {
        title: 'Test2',
        body: 'Un test de post2', 
        extra: 'Un test de extra2',
        // images: 'Por ahora sin images2',
        createdAt: new Date(),
        postTypeId: 2
      },
      {
        title: 'Test3',
        body: 'Un test de post3', 
        extra: 'Un test de extra3',
        // images: 'Por ahora sin images3',
        createdAt: new Date(),
        postTypeId: 3
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('posts', null, {});
  }
};
