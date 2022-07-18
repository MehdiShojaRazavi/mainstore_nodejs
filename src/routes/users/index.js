const express = require('express');
const router = express.Router();
const validator = require('./validator');
const service = require('./service');


router.get('/', service.home);

router.get('/users', service.getUsers);

router.post('/adduser', 
  validator.addUserValidator(),
  service.validate,
  service.addUser
);

module.exports = router;