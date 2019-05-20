module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the User model a name of type STRING
    name: DataTypes.STRING
  });

  User.associate = function(models) {
    // Associating User with Statues
    // When an User is deleted, also delete any associated Posts
    User.hasMany(models.Statue, {
      onDelete: "cascade"
    });
  };

  return User;
};
