'use strict';
module.exports = (sequelize, DataTypes) => {
  const Upload = sequelize.define('Upload', {
    picture: DataTypes.STRING
  }, {});
  Upload.associate = function (models) {
    // associations can be defined here
    Upload.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    }),
      Upload.belongsTo(models.Statue, {
        foreignKey: {
          allowNull: false
        }
      })
};
  return Upload;
};