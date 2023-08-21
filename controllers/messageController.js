const Message = require('../models/Message');
const {StatusCodes} = require('http-status-codes');
const { BadRequestError, NotFoundError} = require('../errors/index');

const createMessage = async(req, res) =>{
  const { messenger, content } = req.body;
  
  if(!messenger || !content){
    throw new BadRequestError('Please provide all values');
  }

  const message = await Message.create(req.body);
  res.status(201).json({message});
};

const getMessages = async(req, res) =>{
  const messages = await Message.find({});
  res.status(StatusCodes.OK).json({ messages });
};

const getMessage = async(req, res) =>{
  const {id: messageId} = req.params;
  
  const message = await Message.findById({_id: messageId});
  
  if (!message) {
    throw new NotFoundError(`No message with id: ${messageId}`)
  }

  res.status(StatusCodes.OK).json({ message });
};


const deleteMessage = async(req, res) =>{
  const {id: messageId} = req.params;

  const message = await Message.findByIdAndDelete({_id: messageId});

  if (!message) {
    throw new NotFoundError(`No message with id: ${messageId}`)
  }

  const messages = await Message.find({});
  res.status(StatusCodes.OK).json({ messages });
};

module.exports ={
  getMessages,
  getMessage,
  createMessage,
  deleteMessage
}