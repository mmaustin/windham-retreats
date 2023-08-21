const express = require('express');
const router = express.Router();

const { getMessages, getMessage, createMessage, deleteMessage } = require('../controllers/messageController');
const { validateMessageInput, validateMessageId } = require('../middleware/validationMiddleware');

router.route('/').get(getMessages).post(validateMessageInput, createMessage);
router.route('/:id').get(validateMessageId, getMessage).delete(validateMessageId, deleteMessage);

module.exports = router;
