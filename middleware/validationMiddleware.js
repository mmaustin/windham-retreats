const { BadRequestError } = require("../errors");
const { body, validationResult} = require('express-validator');


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

module.exports = withValidationErrors;