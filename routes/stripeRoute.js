const express = require('express');
const router = express.Router();

const stripeController = require('../controllers/stripeCheckout');

router.route('/create-checkout-session').post(stripeController);

module.exports = router;