// 'use strict'
// /**
//  * @param {import('sequelize').Sequelize } sequelize 
//  * @param {import('sequelize').DataTypes} DataTypes 
//  */
// const createBlogPosts = (sequelize, DataTypes) => {
//   const BlogPost = sequelize.define("BlogPost", {
//     id: {
//       primaryKey: true,
//       autoIncrement: true,
//       type: DataTypes.INTEGER,
//     },
//     title: DataTypes.STRING,
//     content: DataTypes.STRING,
//     userId: DataTypes.INTEGER,
//     published: DataTypes.DATE,
//     updated: DataTypes.DATE,
//   }, {
//     timestamps: false,
//   });

//   BlogPost.associate = (models) => {
//     BlogPost.belongsTo(models.User,
//       { foreignKey: 'userId', as: 'user' });
//   }

//   return BlogPost;
// };

// module.exports = createBlogPosts;