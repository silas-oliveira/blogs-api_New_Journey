const categorySchema = require('../../utils/schemas/category.schema');
const categoryService = require('../service/category.service');
const { validateToken } = require('./auth.controller');

const categoryController = {
  async add(body, headers) {
    const { name } = body;
    await validateToken(headers);
    const { error } = categorySchema.validate({ name });
    if (error) throw error;
    const result = categoryService.add(body);
    return result;
  },
};

module.exports = categoryController;