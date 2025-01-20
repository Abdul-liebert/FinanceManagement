const express = require('express')
const router = express.Router();
const { registerUser, loginUser }= require('../controllers/userController');

// register Route
router.post('/register', registerUser)

// Login Route
router.post('/login', loginUser)

module.exports = router