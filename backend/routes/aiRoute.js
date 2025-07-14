const express = require('express');
const router = express.Router();
const { askAI } = require('../controller/aiController');
const protect = require('../middleware/auth');

router.post('/ask', protect, askAI);

module.exports = router;
