const express = require('express');
const router = express.Router();
const {Controller} = require('./controller');

router.post('/add', Controller.addCategory); 

module.exports = router;