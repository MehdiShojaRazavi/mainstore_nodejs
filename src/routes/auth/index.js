const express = require('express');
const router = express.Router();
const {Controller} = require('./controller');

router.post('/getotp', Controller.getOtp);

module.exports = router;