


const getMessages = async(req, res) =>{
  res.json({message: 'we have the messages.'})
};

const getMessage = async(req, res) =>{
  res.json({message: 'we have the message.'})
};

const createMessage = async(req, res) =>{
  res.json({message: 'we have created a message.'})
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