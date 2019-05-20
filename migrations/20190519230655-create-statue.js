'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Statues', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ASSET_NAME: {
        type: Sequelize.STRING
      },
      ASSET_ADDR: {
        type: Sequelize.STRING
      },
      SITE_NAME: {
        type: Sequelize.STRING
      },
      LATITUDE: {
        type: Sequelize.DECIMAL
      },
      LONGITUDE: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Statues');
  }
};