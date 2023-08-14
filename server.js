import express from 'express';
const app = express();
import morgan from 'morgan';

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Here we go again!');
})

app.post('/', (req, res) => {
  res.json({message: 'data is data.', data: req.body});
})

app.listen(5001, () => {
  console.log('server running . . .');
});

//use the Ed Roh react e-commerce youtube video to structure the frontend