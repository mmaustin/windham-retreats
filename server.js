const express = require('express');
const app = express();
const morgan = require('morgan');
require('dotenv').config();


if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'));
}

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Here we go again!');
})

app.post('/', (req, res) => {
  res.json({message: 'data is data.', data: req.body});
})

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