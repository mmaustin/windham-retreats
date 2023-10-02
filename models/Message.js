const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  messenger: {
    type: String,
    required: [true, 'Please provide a name.'],
    trim: true,
  },
  content: {
    type: String,
    maxLength: 300,
    required: [true, 'Please add a message.']
  },
  email: {
    type: String,
    require: [true, 'Please include your email.'],
  },
  phoneNumber: {
    type: String,
    required: [true, 'Please include your phone number.'],
    match: [
      /^\d{3}-\d{3}-\d{4}$/,
      'Please provide a valid phone number.'
    ]
  }
},
  { timestamps: true }
);

module.exports = mongoose.model('Message', MessageSchema);