"use strict";
module.exports = (sequelize, DataTypes) => {
  const Statue = sequelize.define(
    "Statue",
    {
      ASSET_NAME: DataTypes.STRING,
      ASSET_ADDR: DataTypes.STRING,
      SITE_NAME: DataTypes.STRING,
      LATITUDE: DataTypes.DECIMAL,
      LONGITUDE: DataTypes.DECIMAL
    },
    {}
  );
  // Statue.associate = function(models) {
  //   // associations can be defined here
  //   Statue.hasMany(models.Upload, {
  //     onDelete: "cascade"
  //   });
  // };
  return Statue;
};
