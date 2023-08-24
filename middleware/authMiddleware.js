const authenticateUser = async (req, res, next) => {
  console.log('auth mid.');
  next();
};

module.exports = authenticateUser;