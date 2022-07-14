'use strict'
/**
 * @param {import('sequelize').Sequelize } sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
const createPostCategoriesModel = (sequelize, DataTypes) => {
  const PostCategories = sequelize.define("PostCategories", {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    timestamps: false,
  });

  return PostCategories;
};

module.exports = createPostCategoriesModel;