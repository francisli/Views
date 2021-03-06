'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    login: DataTypes.STRING,
    hashed_password: DataTypes.STRING,
    admin: DataTypes.BOOLEAN
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    models.User.hasMany(models.Article, {as: 'articles', foreignKey: 'userId'});
    models.User.hasMany(models.Audio, {as: 'audios', foreignKey: 'userId'});
  };
  return User;
};
