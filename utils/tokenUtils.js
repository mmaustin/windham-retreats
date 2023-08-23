const jwt = require('jsonwebtoken');

const createJWT = payload => {
  const token = jwt.sign(payload, 'secret', {
    expiresIn: '1d',
  });
  return token;
};

module.exports = createJWT;