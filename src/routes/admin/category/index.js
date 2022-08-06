const express = require('express');
const router = express.Router();
const {Controller} = require('./controller');

router.get('/all', Controller.getAllCategory);
router.post('/add', Controller.addCategory);
router.get('/parents', Controller.getAllParents);
router.get('/children/:parent', Controller.getChildOfParents);
router.delete('/remove/:categoryId', Controller.removeCategoryById);
module.exports = router;