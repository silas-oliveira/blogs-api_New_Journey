// const Sequelize = require('sequelize');
const { Op } = require('sequelize');
const { BlogPost } = require('../../database/models');
const { PostCategory } = require('../../database/models');
const { Category } = require('../../database/models');
const { User } = require('../../database/models');

const {
  categoryNotFound,
  postNotExist,
  unauthorizedUser,
} = require('../../utils/throwError/throwError');

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

  async list() {
    const result = await BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    return result;
  },

  async get(id) {
    const result = await BlogPost.findOne({
      where: { id },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    if (!result) postNotExist();
    return result;
  },

  async edit(body, payload, idPost) {
    const { id } = payload;
    const { dataValues: { user: { dataValues } } } = await this.get(idPost);
    if (dataValues.id !== id) unauthorizedUser();
    await BlogPost.update(body, {
      where: {
        id: idPost,
      },
    });
    const result = await this.get(idPost);
    return result;
  },

  async delete(idPost, payload) {
    const { id } = payload;
    const { dataValues: { user: { dataValues } } } = await this.get(idPost);
    if (dataValues.id !== id) unauthorizedUser();
    const verifyBlogPost = await this.get(idPost);
    if (!verifyBlogPost) postNotExist();
    await BlogPost.destroy({
      where: {
        id: idPost,
      },
    });
  },

  async search(q) {
    const result = await BlogPost.findAll({
      where: {
        [Op.or]: {
          content: {
              [Op.like]: `%${q}%`,
            },
          title: {
              [Op.like]: `%${q}%`,
            },
        },
      },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    return result;
  },
};

module.exports = postService;
