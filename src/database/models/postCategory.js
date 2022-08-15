// 'use strict'
// /**
//  * @param {import('sequelize').Sequelize } sequelize 
//  * @param {import('sequelize').DataTypes} DataTypes 
//  */
// const createPostCategoriesModel = (sequelize, DataTypes) => {
//   const PostCategory = sequelize.define("PostCategory",
//     {
//     postId: DataTypes.INTEGER,
//     categoryId: DataTypes.INTEGER,
//     },
//     { timestamps: false }
//   );
  
//   PostCategory.associate = (models) => {
//     models.BlogPost.belongsToMany(models.Category, {
//       as: 'categories',
//       through: PostCategory,
//       foreignKey: 'postId',
//       otherKey: 'categoryId',
//     });

//     models.Category.belongsToMany(models.BlogPost, {
//       as: 'blogPosts',
//       through: PostCategory,
//       foreignKey: 'categoryId',
//       otherKey: 'postId',
//     })
//   }

//   return PostCategory;
// };

// module.exports = createPostCategoriesModel;