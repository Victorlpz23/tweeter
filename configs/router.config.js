const express = require('express');
const router = express.Router();

const commonController = require('../controllers/common.controller');
const tweetsController = require('../controllers/tweets.controller');

router.get('/', commonController.home);

router.get('/tweets', tweetsController.list); // Crud ===> Read
router.get('/tweets/new', tweetsController.create);
// router.post('/tweets', tweetsController.Docreate);
// router.get('/tweets/:id', tweetsController.detail);
// router.get('/tweets/:id/update', tweetsController.update);
// router.post('/tweets/:id', tweetsController.doUpdate);
// router.post('/tweets/:id/delete', tweetsController.delete);







module.exports = router;