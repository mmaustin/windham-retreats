const { UnAuthenticatedError } = require("../errors");
const { verifyJWT } = require("../utils/tokenUtils");

const authenticateUser = async (req, res, next) => {
  const {token} = req.cookies;
  if(!token) throw new UnAuthenticatedError('authentication invalid');

  try {
    const { userId, role } = verifyJWT(token);
    req.user = {userId, role};
    next();
  } catch (error) {
    throw new UnAuthenticatedError('authentication invalid');
  }

};

module.exports = authenticateUser;