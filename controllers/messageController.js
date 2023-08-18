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
  const messages = await Message.find({});
  res.status(200).json({ messages });
};

const getMessage = async(req, res) =>{
  const {id: messageId} = req.params;

  const message = await Message.findById({_id: messageId});

  if (!message) {
    res.status(400).json({msg: 'Message not found.'});
    return;
  }

  res.status(200).json({ message });
};


const deleteMessage = async(req, res) =>{
  const {id: messageId} = req.params;

  const message = await Message.findByIdAndDelete({_id: messageId});

  if (!message) {
    res.status(400).json({msg: 'Message not found.'});
    return;
  }

  const messages = await Message.find({});
  res.status(200).json({ messages });
};

module.exports ={
  getMessages,
  getMessage,
  createMessage,
  deleteMessage
}