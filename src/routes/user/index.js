const express = require('express');
const router = express.Router();
const validator = require('./validator');
const {Controller} = require('./controller');

router.get('/list', Controller.getUsers);

router.post('/add', 
// validator.addUserValidator(),
// controller.validate,
Controller.addUser
);

router.get('/:id', Controller.getUserById);

module.exports = router;