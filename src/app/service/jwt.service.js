require('dotenv/config');
const jwt = require('jsonwebtoken');

const jwtService = {
  createToken(user) {
    const token = jwt.sign({ data: user }, process.env.JWT_SECRET, {
      expiresIn: '15m',
      algorithm: 'HS256',
    });
    return token;
  },

  validateToken(token) {
    const { data } = jwt.verify(token, process.env.JWT_SECRET);
    return data;
  },
};

module.exports = jwtService;