const loginSchema = require('../../utils/schemas/login.schema');
const authService = require('../service/auth.service');

const authController = {
  async login(body) {
    const { email, password } = body;
    const { error } = loginSchema.validate({ email, password });
    if (error) throw error;
    const token = await authService.validateCredentials({ email, password });
    return token;
  },

  async validateToken(headers) {
    const { authorization } = headers;
    const user = authService.validateToken(authorization);
    return user;
  },
};

module.exports = authController;