'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
    models.Category.hasMany(models.Article, {as: 'articles', foreignKey: 'categoryId'});
  };
  return Category;
};
