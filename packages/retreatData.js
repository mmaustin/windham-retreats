const mongoose = require('mongoose');

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

const users = [
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