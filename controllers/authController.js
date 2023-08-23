const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");
const bcrypt = require('bcryptjs');
const hashPassword = require("../utils/passwordUtils");



const register = async (req, res) => {

  req.body.password = await hashPassword(req.body.password);

  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({msg: 'user created'});
};

const login = async (req, res) => {
  res.send('login');
};

module.exports = {
  register,
  login
};