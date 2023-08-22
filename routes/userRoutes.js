const express = require('express');
const router = express.Router();

const { register, login} = require('../controllers/authController');
const { validateUserRegistrationInput } = require('../middleware/validationMiddleware');

router.route('/register').post(validateUserRegistrationInput ,register);
router.route('/login').post(validateUserRegistrationInput ,login);

module.exports = router;