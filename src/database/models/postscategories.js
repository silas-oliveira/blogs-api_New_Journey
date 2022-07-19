'use strict'
/**
 * @param {import('sequelize').Sequelize } sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
const createPostCategoriesModel = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define("PostCategory", {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    timestamps: false,
  });

  return PostCategory;
};

module.exports = createPostCategoriesModel;