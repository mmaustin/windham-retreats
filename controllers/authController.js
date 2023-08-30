const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");
const bcrypt = require('bcryptjs');
const { hashPassword, comparePassword } = require("../utils/passwordUtils");
const { UnAuthenticatedError } = require("../errors");
const { createJWT } = require("../utils/tokenUtils");

const register = async (req, res) => {

  req.body.password = await hashPassword(req.body.password);

  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({msg: 'user created'});
};

const login = async (req, res) => {
  const user = await User.findOne({email: req.body.email});
  if(!user) throw new UnAuthenticatedError('invalid credentials');
  const isPasswordCorrect = await comparePassword(req.body.password, user.password);
  if(!isPasswordCorrect) throw new UnAuthenticatedError('invalid credentials');

  const token = createJWT({userId: user._id, role: user.role});

  const oneDay = 1000 * 60 * 60 * 24;
  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
  });
  
  res.status(StatusCodes.OK).json({msg: true});
};

const logout = (req, res) => {
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now())
  });
  res.status(StatusCodes.OK).json({msg: 'user logged out!'})
}

module.exports = {
  register,
  login,
  logout
};