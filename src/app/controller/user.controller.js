const userSchema = require('../../utils/schemas/user.schema');
const userService = require('../service/user.service');
const { validateToken } = require('./auth.controller');

const userController = {
  async add(body) {
    const { displayName, email, password } = body;
    const { error } = userSchema.validate({ displayName, email, password });
    if (error) throw error;
    const result = await userService.add(body);
    return result;
  },

  async list(headers) {
    await validateToken(headers);
    const result = await userService.list();
    return result;
  },

  async get(params, headers) {
    await validateToken(headers);
    const { id } = params;
    const result = await userService.get(id);
    return result;
  },
};

module.exports = userController;