const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");
const bcrypt = require('bcryptjs');


const register = async (req, res) => {

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPassword;
  
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({user});
};

const login = async (req, res) => {
  res.send('login');
};

module.exports = {
  register,
  login
};