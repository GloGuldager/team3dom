"use strict";
module.exports = (sequelize, DataTypes) => {
  const Upload = sequelize.define("Upload", {
    picture: DataTypes.TEXT
  });
  Upload.associate = function(models) {
    // associations can be defined here
    Upload.belongsTo(models.User, {
      foreignKey: {
        allowNull: true
      }
    });
    // Upload.belongsTo(models.Statue, {
    //   foreignKey: {
    //     allowNull: true
    //   }
    // });
  };
  return Upload;
};
