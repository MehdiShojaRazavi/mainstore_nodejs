const express = require('express');
const router = express.Router();
const categoryRouter = require('./category/index');
const userRouter = require('./user/index');

router.use('/category', categoryRouter);
router.use('/user', userRouter);

module.exports = router;