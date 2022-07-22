// const Sequelize = require('sequelize');
const { BlogPost } = require('../../database/models');
const { PostCategory } = require('../../database/models');
const { Category } = require('../../database/models');
const { categoryNotFound } = require('../../utils/throwError/throwError');

// const config = require('../../database/config/config');

// const sequelize = new Sequelize(config.development);

const postService = {
  async verifyCategories(categories) {
    const { count } = await Category.findAndCountAll({ where: { id: categories } });
    if (categories.length !== count) categoryNotFound();
  },

  async addToBlogPost(body, payload) {
    const { title, content } = body;
    const { id } = payload;
    const { dataValues } = await BlogPost.create({
      title,
      content,
      userId: id,
      published: new Date(),
      updated: new Date(),
    });

    return dataValues;
  },

  async addToTables(body, payload) {
    const { categoryIds } = body;
    await this.verifyCategories(categoryIds);
    const infoNewPost = await this.addToBlogPost(body, payload);
    const { id } = infoNewPost;
    const categories = categoryIds.map((post) => ({ postId: id, categoryId: post }));
    await PostCategory.bulkCreate(categories);
    const { dataValues } = await BlogPost.findByPk(id);
    return dataValues;
  },
};

module.exports = postService;

// await BlogPost.create(body);
// return result;