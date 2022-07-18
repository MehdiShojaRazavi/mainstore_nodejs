const express = require('express');
const router = express.Router();
const { StatusCodes:HttpStatus} = require("http-status-codes")
const userRouter = require('./user/index');

router.use('/user', userRouter);

module.exports = router;