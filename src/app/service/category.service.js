const { Category } = require('../../database/models');

const categoryService = {
  async add(body) {
    const result = await Category.create(body);
    return result;
  },
};

module.exports = categoryService;