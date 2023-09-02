const mongoose = require('mongoose');

const RetreatSchema = mongoose.Schema({
  name: String,
  data: String,
  description: String,
  unitAmount: Number,
  },
  {timestamps: true},
);

module.exports = mongoose.model('Retreat', RetreatSchema);