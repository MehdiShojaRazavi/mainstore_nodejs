const express = require('express');
const router = express.Router();
const {Controller} = require('./controller');

router.post('/get-otp', Controller.getOtp);
router.post('/check-otp', Controller.checkOtp);
router.post('/refresh-token', Controller.refreshToken);

module.exports = router;