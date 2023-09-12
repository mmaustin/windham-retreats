const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  email: String,
  phoneNumber: Number,
  zipCode: Number,
  // password: String,
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  },
  {timestamps: true}
);

UserSchema.methods.toJSON = function(){
  let obj = this.toObject();
  delete obj.password;
  return obj;
}

module.exports = mongoose.model('User', UserSchema);