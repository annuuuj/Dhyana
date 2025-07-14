const express = require('express');
const router = express.Router();
const { saveJournal } = require('../controller/JournalCon');

router.post('/add', saveJournal);

module.exports = router;
