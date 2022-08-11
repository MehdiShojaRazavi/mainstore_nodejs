const express = require('express');
const router = express.Router();
const {Controller} = require('./controller');

router.get('/all', Controller.getAllCategory);

module.exports = router;