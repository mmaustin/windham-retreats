const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const YOUR_DOMAIN = 'http://localhost:5173';

const stripeController = async (req, res) => {

  const price = await stripe.prices.create({
    unit_amount: 2200,
    currency: 'usd',
    product: 'prod_OSJJ54DmYBCp65',
  });

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: price.id,
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });
  res.redirect(303, session.url);

};

module.exports = stripeController;