const express = require('express');
const router = express.Router();
const { submitTalkForm } = require('../controller/TalkCon');

router.post('/submit', submitTalkForm);

module.exports = router;
