const express = require('express');
const router = express.Router();

const { getMessages, getMessage, createMessage, deleteMessage } = require('../controllers/messageController');

router.route('/').get(getMessages).post(createMessage);
router.route('/:id').get(getMessage).delete(deleteMessage);

module.exports = router;
