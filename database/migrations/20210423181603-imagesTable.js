'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('images', {
      id: {
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER,
    },
      name: Sequelize.STRING,
      postId: {
        type: Sequelize.INTEGER,
        references:{
          model: {
            tableName: 'posts',
          },
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('images');
  }
};
