'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        first_name: "Admin",
        last_name: "Admin",
        password:
          "$2a$10$qm5fkZGUhZtDf2ggxtEe8e//WxU5ama0tm2Nv8wzUpi7X4/zn9YsO", //Password: 'Admin'
        email: "admin@admin.com",
      },
      {
        first_name: "Admin2",
        last_name: "Admin2",
        password:
          "$2a$10$zPW9HfhQmwE7K9QTh.njZeUMiVtFjSB7mjjoH89qhtaQdIaZ17qZC", //Password: 'Admin2'
        email: "admin2@admin2.com",
      },
      {
        first_name: "Admin3",
        last_name: "Admin3",
        password:
          "$2a$10$nFAjSvyKrw338QLBma3dxuqYIh27TIZl26KR7KELzZ3Wp31ZPVWiS", //Password: 'Admin3'
        email: "admin3@admin3.com",
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  }
};
