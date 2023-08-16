const express = require('express');
const app = express();
const morgan = require('morgan');
require('dotenv').config();
const messagesRoutes = require('./routes/messagesRoutes')

if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/v1/messages', messagesRoutes);

app.use('*', (req, res) => {
  res.status(404).json({msg: "route not found"});
})

app.use((err, req, res, next)=>{
  console.log(err);
  res.status(500).json({msg: 'something went wrong'})
})

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`server running ${port} ...`);
});

//use the Ed Roh react e-commerce youtube video to structure the frontend