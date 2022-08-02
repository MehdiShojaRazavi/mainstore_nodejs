const express = require('express');
const router = express.Router();
const {Controller} = require('./controller');

router.get('/hash-password/:password', Controller.hashPassword);
router.get('/random-number', Controller.getRandomNumber);

module.exports = router;