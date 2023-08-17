const Message = require('../models/Message');


const createMessage = async(req, res) =>{
  const { messenger, content } = req.body;

  if(!messenger || !content){
    throw new Error('Please provide all values.');
  }
  
  const message = await Message.create(req.body);
  res.status(200).json({message});
};

const getMessages = async(req, res) =>{
  res.json({message: 'we have the messages.'})
};

const getMessage = async(req, res) =>{
  res.json({message: 'we have the message.'})
};


const deleteMessage = async(req, res) =>{
  res.json({message: 'message deleted.'})
};

module.exports ={
  getMessages,
  getMessage,
  createMessage,
  deleteMessage
}