const express = require('express');
const router = express.Router();
const {Controller} = require('./controller');

router.get('/list', Controller.getUsers);
router.post('/add', Controller.addUser);
router.get('/:id', Controller.getUserById);

module.exports = router;