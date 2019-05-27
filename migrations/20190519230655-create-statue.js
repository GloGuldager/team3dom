"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Statues", {
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
        type: Sequelize.DECIMAL(10, 8)
      },
      LONGITUDE: {
        type: Sequelize.DECIMAL(11, 8)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Statues");
  }
};
