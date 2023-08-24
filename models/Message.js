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
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  },
  {timestamps: true}
);

module.exports = mongoose.model('Message', MessageSchema);