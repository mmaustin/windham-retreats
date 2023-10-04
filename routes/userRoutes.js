const express = require('express');
const router = express.Router();

const { getCurrentUser, getApplicationStats, updateUser } = require('../controllers/userController');
// const { validateUpdateUserInput } = require('../middleware/validationMiddleware');

router.route('/current-user').get(getCurrentUser);
router.route('/admin/app-stats').get(getApplicationStats);
router.route('/update-user').patch(updateUser);

module.exports = router;