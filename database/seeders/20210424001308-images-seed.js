'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {  
    await queryInterface.bulkInsert('images', [
      {
        name: 'post-image-1',
        postId:1,
      },
      {
        name:'post-image-2',
        postId:1,
      },
      {
        name:'post-image-3',
        postId:1,
      },
      {
        name:'post-image-4',
        postId:2,
      },
      {
        name:'post-image-5',
        postId:2,
      },
      {
        name:'post-image-6',
        postId:3,
      },
      {
        name:'post-image-7',
        postId:3,
      },
      {
        name:'post-image-8',
        postId:3,
      },
      
    ]);
   
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('images', null, {});
    
  }
};
