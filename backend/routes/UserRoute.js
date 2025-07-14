const express = require('express');
const router = express.Router();
const { registerUser } = require('../controller/UserCon');

router.post('/register', registerUser); // Single route for register + login

module.exports = router;
