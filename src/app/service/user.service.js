const { User } = require('../../database/models');
const { userAlreadyExist, userDoesNotExist } = require('../../utils/throwError/throwError');
const { createToken } = require('./jwt.service');

const userService = {
  async add(body) {
    const { displayName, email, password, image } = body;
    const user = await User.findOne({ where: { email } });
    if (user) userAlreadyExist();
    const dataValues = await User.create(
      { displayName, email, password, image },
    );
    const { password: _, ...userWithoutPassword } = dataValues.dataValues;
    return createToken(userWithoutPassword);
  },

  async list() {
    const result = await User.findAll({
      attributes: {
        exclude: ['password'],
      },
    });
    return result;
  },

  async get(id) {
    const result = await User.findByPk(id, {
      attributes: {
        exclude: ['password'],
      },
    });
    if (!result) userDoesNotExist();
    return result;
  },

  async delete(payload) {
    const { id } = payload;
    const findUser = await User.findOne({
      where: id,
    });
    if (!findUser) userDoesNotExist();
    if (findUser) {
      await User.destroy({
        where: {
          id,
        },
      });
    }
  },
};

module.exports = userService;