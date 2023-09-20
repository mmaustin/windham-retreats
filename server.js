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
//const User = require('./models/User');
const { userInstances, retreatInstances } = require('./packages/retreatData');
//const Retreat = require('./models/Retreat');
const retreatRoutes = require('./routes/retreatRoutes');
const stripeConnect = require('./routes/stripeRoute');


if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'));
}

app.use(cookieParser());
app.use(express.json());

//replace authenticateUser middleware after proxy and axios testing!!!!!
app.use('/api/v1/messages', messagesRoutes);
app.use('/api/v1/users', authenticateUser , userRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/retreats', retreatRoutes);
app.use(stripeConnect);

// app.use('/api/v1/config', (req, res) => {
//   res.status(200).json({data: {name: 'mccray'}});
// })

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-08-16",
});

app.get("/api/v1/config", (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

app.post("/api/v1/create-payment-intent", async (req, res) => {
  let {currency, amount} = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: currency,
      amount: amount,
      automatic_payment_methods: { enabled: true },
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});
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
    //Retreat.insertMany(retreatInstances);
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}...`)
    })
  } catch (error) {
      console.log(error)
  }
}
start()

//use the Ed Roh react e-commerce youtube video to structure the frontend