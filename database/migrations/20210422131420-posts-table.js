'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      title: Sequelize.DataTypes.STRING,
      body: Sequelize.DataTypes.STRING,
      extra: Sequelize.DataTypes.STRING,
      images: Sequelize.DataTypes.STRING,
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE,
      dateEnd: Sequelize.DataTypes.DATE,
      postTypeId: {
        type: Sequelize.DataTypes.INTEGER,
        references:{
          model: {
            tableName: 'poststypes',
          },
          key: 'id',
        }
      }


    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts')
  }
};
