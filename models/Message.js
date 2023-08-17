const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  messenger: {
    type: String,
    required: [true, 'Please provide messenger\'s name.'],
    trim: true,
  },
  content: {
    required: [true, 'Please type your message.'],
    maxLength: 300
  }
  },
  {timestamps: true}
);

module.exports = mongoose.model('Message', MessageSchema);