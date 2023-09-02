require('express-async-errors');
const express = require('express');
const app = express();
const morgan = require('morgan');
require('dotenv').config();
const messagesRoutes = require('./routes/messagesRoutes');
const connectDB = require('./db/connect');
const errorHandlerMiddleware = require('./middleware/error-handler');
const authRoutes = require('./routes/authRoutes');
const authenticateUser = require('./middleware/authMiddleware');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/userRoutes');
const User = require('./models/User');
const userInstances = require('./packages/retreatData');


if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'));
}

app.use(cookieParser());
app.use(express.json());

//replace authenticateUser middleware after proxy and axios testing!!!!!
app.use('/api/v1/messages', authenticateUser , messagesRoutes);
app.use('/api/v1/users', authenticateUser , userRoutes);
app.use('/api/v1/auth', authRoutes);

// app.use('/api/v1/vite', (req, res) => {
//   res.status(200).json({data: {name: 'mccray'}});
// })
// app.use('/api/v1/vigor', (req, res) => {
//   res.status(200).json({data: {name: 'martin'}});
// })

app.use('*', (req, res) => {
  res.status(404).json({msg: "route not found"});
})

// app.use((err, req, res, next)=>{
//   // console.log(err);
//   res.status(500).json({msg: 'something went wrong'})
// })

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5001;

// app.listen(port, () => {
//   console.log(`server running ${port} ...`);
// });

// const port = process.env.PORT || 5001

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    //place insertMany() here
    //User.insertMany(userInstances);
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}...`)
    })
  } catch (error) {
      console.log(error)
  }
}
start()

//use the Ed Roh react e-commerce youtube video to structure the frontend