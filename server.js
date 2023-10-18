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
const { userInstances, retreatInstances } = require('./packages/retreatData');
const retreatRoutes = require('./routes/retreatRoutes');
const stripeConnect = require('./routes/stripeRoute');


if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cookieParser());
app.use(express.json());

app.use('/api/v1/messages', messagesRoutes);
app.use('/api/v1/users', authenticateUser, userRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/retreats', retreatRoutes);
app.use(stripeConnect);

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-08-16",
});

app.get("/api/v1/config", (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

app.post("/api/v1/create-payment-intent", async (req, res) => {
  let { currency, amount } = req.body;

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

app.use('*', (req, res) => {
  res.status(404).json({ msg: "route not found" });
})

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5001;

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
