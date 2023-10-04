// const { BadRequestError, NotFoundError, UnauthorizedError } = require("../errors");
// const { body, param, validationResult} = require('express-validator');
// const mongoose = require('mongoose');
// const Message = require('../models/Message');
// const User = require("../models/User");

// const withValidationErrors = (validationValues) => {
//   return [
//     validationValues,
//     (req, res, next) => {
//       const errors = validationResult(req);
//       if (!errors.isEmpty()){
//         const errorMessages = errors.array().map(error => error.msg);

//         if(errorMessages[0].startsWith('no message')){
//           throw new NotFoundError(errorMessages);
//         }

//         if(errorMessages[0].startsWith('not authorized')){
//           throw new UnauthorizedError('not authorized to access this route');
//         }

//         throw new BadRequestError(errorMessages);
//       }
//       next();
//     },
//   ];
// };

// const validateMessageInput = withValidationErrors([
//   body('messenger').notEmpty().withMessage('messenger is required'),
//   body('content').notEmpty().withMessage('content is required'),
//   body('phoneNumber').notEmpty().withMessage('phone number is required'),
//   body('email').notEmpty().withMessage('email is required').isEmail().withMessage('invalid email format')
// ]);

// const validateMessageId = withValidationErrors([
//   param('id').custom(async (value, { req }) => { 
//     const isValidId = mongoose.Types.ObjectId.isValid(value);
//     if(!isValidId) throw new BadRequestError('invalid id configuration');
//     const message = await Message.findById(value);

//     if(!message) throw new NotFoundError(`no message with id: ${value}`);

//     const isAdmin = req.user.role === 'admin';
//     const isOwner = req.user.userId === message.createdBy.toString();
//     if(!isAdmin && !isOwner) throw new UnauthorizedError('not authorized to access this route');
//   }),
// ]);

// const validateRegisterInput = withValidationErrors([
//   body('name').notEmpty().withMessage('name is required'),
//   body('lastName').notEmpty().withMessage('last name is required'),
//   body('phoneNumber').notEmpty().withMessage('phone number is required'),
//   body('zipCode').notEmpty().withMessage('zip code is required'),
//   body('email').notEmpty().withMessage('email is required').isEmail().withMessage('invalid email format')
//   .custom(async (email) => {
//     const user = await User.findOne({email});
//     if(user){
//       throw new BadRequestError('email already in use')
//     }
//   }),
//   // body('password').notEmpty().withMessage('password is required')
//   // .isLength({min: 8}).withMessage('password must be at least 8 characters long'),
// ]);

// const validateLoginInput = withValidationErrors([
//   body('email').notEmpty().withMessage('email is required').isEmail().withMessage('invalid email format'),
//   body('password').notEmpty().withMessage('password is required')
// ]);

// const validateUpdateUserInput = withValidationErrors([
//   body('name').notEmpty().withMessage('name is required'),
//   body('email').notEmpty().withMessage('email is required').isEmail().withMessage('invalid email format')
//   .custom(async (email, { req }) => {
//     const user = await User.findOne({email});
//     if(user && user._id.toString() !== req.user.userId){
//       throw new BadRequestError('email already in use')
//     }
//   }),
// ])

// module.exports = { validateMessageInput, validateMessageId, validateRegisterInput, validateLoginInput, validateUpdateUserInput };