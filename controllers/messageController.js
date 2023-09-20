const Message = require('../models/Message');
const {StatusCodes} = require('http-status-codes');
const { BadRequestError, NotFoundError} = require('../errors/index');

const createMessage = async(req, res) => {
  //req.body.createdBy = req.user.userId;
  const message = await Message.create(req.body);
  res.status(201).json({success: 'We Received Your Message!'});
};

const getMessages = async(req, res) => {
  
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