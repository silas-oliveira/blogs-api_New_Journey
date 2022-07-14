require('dotenv/config');
const jwtService = require('./jwt.service');
const { User } = require('../../database/models');

const passwordService = require('./password.service');
const { UnauthorizedError, tokeIsRequired } = require('../../utils/throwError/throwError');

const authService = {
   validateCredentials: async ({ email, password }) => {
    const user = await User.findOne({ where: { email } });
    if (!user) UnauthorizedError();

    passwordService.checkPassword(password, user.password);
    const { password: _, ...userWithoutPassword } = user;

    const token = jwtService.createToken(userWithoutPassword.dataValues);
    return token;
  },

  validateToken: (token) => {
    if (!token) tokeIsRequired();
    const user = jwtService.validateToken(token);
    return user;
  },
};

module.exports = authService;