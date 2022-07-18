'use strict'
/**
 * @param {import('sequelize').Sequelize } sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
const createCategoriesModel = (sequelize, DataTypes) => {
  const Category = sequelize.define("Category", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  return Category;
};

module.exports = createCategoriesModel;