const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  messenger: {
    type: String,
    trim: true,
  },
  content: {
    type: String,
    maxLength: 300
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  }
  },
  {timestamps: true}
);

module.exports = mongoose.model('Message', MessageSchema);