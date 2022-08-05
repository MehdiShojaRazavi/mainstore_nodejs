const express = require('express');
const router = express.Router();
const {Controller} = require('./controller');

router.post('/add', Controller.addCategory);
router.get('/parents', Controller.getAllParents);
router.get('/children/:parent', Controller.getChildOfParents);
router.get('/all', Controller.getAllCategory);

module.exports = router;