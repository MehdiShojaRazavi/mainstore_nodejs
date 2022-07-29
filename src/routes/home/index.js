const express = require('express');
const router = express.Router();
const {Controller} = require('./controller');
const {verifyAccessToken} = require('./../../middlewares/verifyAccessToken');
router.post('/', verifyAccessToken, Controller.indexPage);

module.exports = router;