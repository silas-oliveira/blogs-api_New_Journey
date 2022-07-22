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
};

module.exports = postController;