const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");
const Message = require("../models/Message");

const getCurrentUser = async (req, res) => {
  const user = await User.findOne({_id: req.user.userId});
  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};

const getApplicationStats = async (req, res) => {
  res.status(StatusCodes.OK).json({msg: "application stats"})
};

const updateUser = async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.user.userId, req.body);
  res.status(StatusCodes.OK).json({msg: 'user updated'})
};

module.exports = { getCurrentUser, getApplicationStats, updateUser };