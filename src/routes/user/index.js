const express = require('express');
const router = express.Router();
const validator = require('./validator');
const controller = require('./controller');

router.get('/:id', controller.getUserById);
router.get('/list', controller.getUsers);

router.post('/add', 
  // validator.addUserValidator(),
  // controller.validate,
  controller.addUser
);

module.exports = router;