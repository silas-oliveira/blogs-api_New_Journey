const userSchema = require('../../utils/schemas/user.schema');
const userService = require('../service/user.service');

const userController = {
  async add(body) {
    const { displayName, email, password } = body;
    const { error } = userSchema.validate({ displayName, email, password });
    if (error) throw error;
    const result = await userService.add(body);
    return result;
  },
};

module.exports = userController;