const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");
const Message = require("../models/Message");

const getCurrentUser = async (req, res) => {
  res.status(StatusCodes.OK).json({msg: "get current user"})
};

const getApplicationStats = async (req, res) => {
  res.status(StatusCodes.OK).json({msg: "application stats"})
};

const updateUser = async (req, res) => {
  res.status(StatusCodes.OK).json({msg: "update user"})
};

module.exports = { getCurrentUser, getApplicationStats, updateUser };