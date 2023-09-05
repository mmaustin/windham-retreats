const express = require('express');
const router = express.Router();

const getRetreats = require('../controllers/retreatController');

router.route('/').get(getRetreats);

module.exports = router;
