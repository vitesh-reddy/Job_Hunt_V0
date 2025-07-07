const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

// Defines user-related routes
router.get('/current', authMiddleware, userController.getCurrentUser);

module.exports = router;