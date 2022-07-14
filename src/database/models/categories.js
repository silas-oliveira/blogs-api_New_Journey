'use strict'
/**
 * @param {import('sequelize').Sequelize } sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
const createCategoriesModel = (sequelize, DataTypes) => {
  const Categories = sequelize.define("Categories", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  return Categories;
};

module.exports = createCategoriesModel;