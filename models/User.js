const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
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