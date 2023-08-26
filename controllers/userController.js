const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");
const Message = require("../models/Message");
const { UnauthorizedError } = require("../errors");

const getCurrentUser = async (req, res) => {
  const user = await User.findOne({_id: req.user.userId});
  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};

const getApplicationStats = async (req, res) => {
  if(req.user.role !== 'admin'){
    throw new UnauthorizedError('not authorized to view these stats')
  }

  const users = await User.find({});
  const messages = await Message.find({});
  res.status(StatusCodes.OK).json({users: users, msg: messages})
};

const updateUser = async (req, res) => {
  
  const obj = {...req.body};
  delete obj.password;
  const updatedUser = await User.findByIdAndUpdate(req.user.userId, obj);
  res.status(StatusCodes.OK).json({msg: 'user updated'})
};

module.exports = { getCurrentUser, getApplicationStats, updateUser };