const bcrypt = require('bcrypt');
const { UnauthorizedError } = require('../../utils/throwError/throwError');

const passwordService = {
  encryptPassword(password) {
    const salt = bcrypt.genSaltSync(5);
    const encryptedPassword = bcrypt.hashSync(password, salt);
    return encryptedPassword; 
  },

  // checkPassword(password, passwordDb) {
  //   const isMatch = bcrypt.compareSync(password, passwordDb);
  //   if (!isMatch) UnauthorizedError();
  // },

  checkPassword(password, passwordDb) {
    if (password !== passwordDb) UnauthorizedError();
  },
};

module.exports = passwordService;