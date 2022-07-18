const express = require('express');
const router = express.Router();
const validator = require('./validator');
const controller = require('./controller');

router.get('/list', controller.getUsers);

router.post('/adduser', 
  validator.addUserValidator(),
  controller.validate,
  controller.addUser
);

module.exports = router;