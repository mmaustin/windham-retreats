const Message = require('../models/Message');
const {StatusCodes} = require('http-status-codes');
const { BadRequestError, NotFoundError} = require('../errors/index');

const createMessage = async(req, res) => {
  const message = await Message.create(req.body);
  res.status(201).json({message});
};

const getMessages = async(req, res) => {
  console.log(req.user);
  const messages = await Message.find({});
  res.status(StatusCodes.OK).json({ messages });
};

const getMessage = async(req, res) => {
  
  const message = await Message.findById(req.params.id);
  res.status(StatusCodes.OK).json({ message });
};


const deleteMessage = async(req, res) => {

  const message = await Message.findByIdAndDelete(req.params.id);

  const messages = await Message.find({});
  res.status(StatusCodes.OK).json({ messages });
};

module.exports ={
  getMessages,
  getMessage,
  createMessage,
  deleteMessage
}