const mongoose = require('mongoose');

const RetreatSchema = mongoose.Schema({
  name: String,
  date: String,
  description: String,
  picturePath: String,
  unitAmount: Number,
  displayAmount: String,
  },
  {timestamps: true},
);

module.exports = mongoose.model('Retreat', RetreatSchema);