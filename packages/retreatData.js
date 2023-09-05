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
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

const retreatInstances = [
  {
    _id: retreatIds[0],
    name: "Goddess Suite",
    date: "October 19-22, 2023",
    description: "Goddess Suite with ensuite bathroom and private balcony",
    picturePath: "retreat-1.jpg",
    unitAmount: 220000,
    displayAmount: "$2,200.00"
  },
  {
    _id: retreatIds[1],
    name: "Upstairs Queen Bedroom 1",
    date: "October 19-22, 2023",
    description: "Shared Bathroom, Single or Double Occupancy",
    picturePath: "retreat-2.jpg",
    unitAmount: 130000,
    displayAmount: "$1,300.00"
  },
  {
    _id: retreatIds[2],
    name: "Loft, Single Bed",
    date: "October 19-22, 2023",
    description: "Shared Bathroom On The Top Floor",
    picturePath: "retreat-3.jpg",
    unitAmount: 75000,
    displayAmount: "$750.00"
  },
]

module.exports = { userInstances, retreatInstances };