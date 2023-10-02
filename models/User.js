const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  email: String,
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
    match: [
      /^\d{5}/,
      'Please provide a valid zip code.'
    ]
  },
  // password: String,
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
},
  { timestamps: true }
);

UserSchema.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj.password;
  return obj;
}

module.exports = mongoose.model('User', UserSchema);