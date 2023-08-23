const express = require('express');
const router = express.Router();

const { register, login} = require('../controllers/authController');
const { validateRegisterInput } = require('../middleware/validationMiddleware');

router.route('/register').post(validateRegisterInput ,register);
router.route('/login').post(login);

module.exports = router;