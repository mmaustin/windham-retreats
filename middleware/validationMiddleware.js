const { BadRequestError, NotFoundError } = require("../errors");
const { body, param, validationResult} = require('express-validator');
const mongoose = require('mongoose');
const Message = require('../models/Message');
const User = require("../models/User");

const withValidationErrors = (validationValues) => {
  return [
    validationValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()){
        const errorMessages = errors.array().map(error => error.msg);

        if(errorMessages[0].startsWith('no message')){
          throw new NotFoundError(errorMessages);
        }

        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

const validateMessageInput = withValidationErrors([
  body('messenger').notEmpty().withMessage('messenger is required'),
  body('content').notEmpty().withMessage('content is required'),
]);

const validateMessageId = withValidationErrors([
  param('id').custom(async value => { 
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if(!isValidId) throw new BadRequestError('invalid id configuration');
    const message = await Message.findById(value);

    if(!message) throw new NotFoundError(`no message with id: ${value}`)
  }),
]);

const validateRegisterInput = withValidationErrors([
  body('name').notEmpty().withMessage('name is required'),
  body('email').notEmpty().withMessage('email is required').isEmail().withMessage('invalid email format')
  .custom(async (email) => {
    const user = await User.findOne({email});
    if(user){
      throw new BadRequestError('email already in use')
    }
  }),
  body('password').notEmpty().withMessage('password is required')
  .isLength({min: 8}).withMessage('password must be at least 8 characters long'),
]);

const validateLoginInput = withValidationErrors([
  body('email').notEmpty().withMessage('email is required').isEmail().withMessage('invalid email format'),
  body('password').notEmpty().withMessage('password is required')
]);

module.exports = { validateMessageInput, validateMessageId, validateRegisterInput, validateLoginInput };