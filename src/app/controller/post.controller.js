const postToEditSchema = require('../../utils/schemas/post.edit.schema');
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

  async edit(body, headers, params) {
    const { error } = postToEditSchema.validate(body);
    if (error) throw error;
    const { id } = params;
    const payload = await validateToken(headers);
    const result = await postService.edit(body, payload, id);
    return result;
  },

  async delete(headers, params) {
    const { id } = params;
    const payload = await validateToken(headers);
    const result = await postService.delete(id, payload);
    return result;
  },

  async search(headers, query) {
    await validateToken(headers);
    const { q } = query;
    const result = await postService.search(q);
    return result;
  },
};

module.exports = postController;