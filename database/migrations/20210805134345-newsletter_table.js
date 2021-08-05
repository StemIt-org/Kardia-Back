'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("newsletterMail", {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      email: Sequelize.STRING,
      name: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("newsletterMail");
  }
};
