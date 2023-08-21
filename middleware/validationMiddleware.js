const { BadRequestError } = require("../errors");
const { body, param, validationResult} = require('express-validator');
const mongoose = require('mongoose');

const withValidationErrors = (validationValues) => {
  return [
    validationValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()){
        const errorMessages = errors.array().map(error => error.msg);
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
  param('id')
    .custom(value => mongoose.Types.ObjectId.isValid(value))
    .withMessage('invalid Id')
]);

module.exports = { validateMessageInput, validateMessageId };