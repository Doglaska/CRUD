const express = require('express');
const authMiddleware = require('../auth/authMiddleware');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/profile', authMiddleware(['user', 'admin', 'employee']), userController.getProfile);
router.get('/admin', authMiddleware(['admin']), userController.getAdminData);
router.get('/employee', authMiddleware(['admin', 'employee']), userController.getEmployeeData);

module.exports = router;
