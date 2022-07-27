const express = require('express');
const router = express.Router();
const { StatusCodes:HttpStatus} = require("http-status-codes")
const userRouter = require('./user/index');
const authRouter = require('./auth/index');

router.use('/user', userRouter);
router.use('/auth', authRouter);

module.exports = router;