'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        first_name: "Admin",
        last_name: "Admin",
        password:
          "Admin", //Password: 'Admin'
        email: "admin@admin.com",
        avatar: 'avatar1'
      },
      {
        first_name: "Admin2",
        last_name: "Admin2",
        password:
          "Admin2", //Password: 'Admin2'
        email: "admin2@admin2.com",
        avatar: 'avatar2'
      },
      {
        first_name: "Admin3",
        last_name: "Admin3",
        password:
          "Admin3", //Password: 'Admin3'
        email: "admin3@admin3.com",
        avatar: 'avatar3'
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  }
};
