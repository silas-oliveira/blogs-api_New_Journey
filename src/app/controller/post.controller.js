const postSchema = require('../../utils/schemas/post.schema');
const postService = require('../service/post.service');
const { validateToken } = require('./auth.controller');

const postController = {
  async add(body, headers) {
    const { error } = postSchema.validate(body);
    if (error) throw error;
    const payload = await validateToken(headers);
    const result = await postService.addToTables(body, payload);
    return result;
  },

  async list(headers) {
    await validateToken(headers);
    const result = await postService.list();
    return result;
  },

  async get(headers, params) {
    await validateToken(headers);
    const { id } = params;
    const result = await postService.get(id);
    return result;
  },
};

module.exports = postController;