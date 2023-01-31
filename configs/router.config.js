const express = require('express');
const router = express.Router();

const commonController = require('../controllers/common.controller');
const tweetsController = require('../controllers/tweets.controller');

router.get('/', commonController.home);
router.get('/list', tweetsController.list);




module.exports = router;