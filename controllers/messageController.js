const Message = require('../models/Message');


const createMessage = async(req, res) =>{
  const { messenger, content } = req.body;

  if(!messenger || !content){
    res.status(400).json({msg: 'Please provide all values.'});
    return;
  }

  const message = await Message.create(req.body);
  res.status(201).json({message});
};

const getMessages = async(req, res) =>{
  res.json({message: 'we have the messages.'})
};

const getMessage = async(req, res) =>{
  const {id: messageId} = req.params;

  const message = await Message.findOne({_id: messageId});

  if (!message) {
    res.status(400).json({msg: 'Message not found.'});
    return;
  }

  res.status(200).json({ message });
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