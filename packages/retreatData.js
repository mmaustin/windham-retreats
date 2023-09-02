const mongoose = require('mongoose');

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

const userInstances = [
  {
    _id: userIds[0],
    name: "Jake Williams",
    emai: 'williams@email.com',
    password: 'williams'
  },
  {
    _id: userIds[1],
    name: 'Jason Maxwell',
    email: 'maxwell@email.com',
    password: 'maxwell'
  },
  {
    _id: userIds[2],
    name: 'Charles Jennings',
    email: 'jennings@email.com',
    password: 'jennings'
  }
];

const retreatIds = [
  new mongoose.Types.ObjectId(),
];

const retreatInstances = [
  {
    _id: retreatIds[0],
    name: "Goddess Suite",
    date: "October 19-22, 2020",
    description: "Goddess Suite with ensuite bathroom and private balcony",
    picturePath: "retreat-1",
    unitAmount: 220000,
    displayAmount: "$2,200.00"
  }
]

module.exports = { userInstances, retreatInstances };