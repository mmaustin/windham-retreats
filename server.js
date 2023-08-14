import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Here we go again!');
})

app.listen(5001, () => {
  console.log('server running . . .');
});