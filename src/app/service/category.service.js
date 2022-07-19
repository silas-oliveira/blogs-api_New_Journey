const { Category } = require('../../database/models');

const categoryService = {
  async add(body) {
    const result = await Category.create(body);
    return result;
  },

  async get() {
    const result = await Category.findAll();
    return result;
  },
};

module.exports = categoryService;