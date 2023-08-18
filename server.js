require('express-async-errors');
const express = require('express');
const app = express();
const morgan = require('morgan');
require('dotenv').config();
const messagesRoutes = require('./routes/messagesRoutes');
const connectDB = require('./db/connect');


if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/v1/messages', messagesRoutes);

// app.use('/api/v1/vite', (req, res) => {
//   res.status(200).json({data: {name: 'mccray'}});
// })
// app.use('/api/v1/vigor', (req, res) => {
//   res.status(200).json({data: {name: 'martin'}});
// })

app.use('*', (req, res) => {
  res.status(404).json({msg: "route not found"});
})

app.use((err, req, res, next)=>{
  // console.log(err);
  res.status(500).json({msg: 'something went wrong'})
})

const port = process.env.PORT || 5001;

// app.listen(port, () => {
//   console.log(`server running ${port} ...`);
// });

// const port = process.env.PORT || 5001

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}...`)
    })
  } catch (error) {
      console.log(error)
  }
}
start()

//use the Ed Roh react e-commerce youtube video to structure the frontend