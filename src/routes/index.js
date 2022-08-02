const express = require('express');
const router = express.Router();
const { StatusCodes:HttpStatus} = require("http-status-codes")
const userRouter = require('./user/index');
const authRouter = require('./auth/index');
const devloperRouter = require('./developer/index');
const homeRouter = require('./home/index');
router.use('/user', userRouter);
router.use('/auth', authRouter);
router.use('/developer', devloperRouter);
router.use('/', homeRouter);

module.exports = router;