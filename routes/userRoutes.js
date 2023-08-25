const express = require('express');
const router = express.Router();

const { register, login, logout} = require('../controllers/authController');
const { validateRegisterInput, validateLoginInput } = require('../middleware/validationMiddleware');

router.route('/register').post(validateRegisterInput ,register);
router.route('/login').post(validateLoginInput , login);
router.route('/logout').get(logout);

module.exports = router;