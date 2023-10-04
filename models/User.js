const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please include your name.']
  },
  lastName: {
    type: String,
    required: [true, 'Please include your last name.']
  },
  email: {
    type: String,
    required: [true, 'Please include your email.']
  },
  phoneNumber: {
    type: String,
    required: [true, 'Please include your phone number.'],
    match: [
      /^\d{3}-\d{3}-\d{4}$/,
      'Please provide a valid phone number.'
    ]
  },
  zipCode: {
    type: String,
    required: [true, 'Please include your zip code'],
    match: [
      /^\d{5}/,
      'Please provide a valid zip code.'
    ]
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
},
  { timestamps: true }
);

// UserSchema.methods.toJSON = function () {
//   let obj = this.toObject();
//   delete obj.password;
//   return obj;
// }

module.exports = mongoose.model('User', UserSchema);