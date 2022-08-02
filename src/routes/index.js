const express = require('express');
const router = express.Router();
const userAuthRouter = require('./user/auth/index');
const adminRouter = require('./admin/index');
const developerRouter = require('./developer/index');
const homeRouter = require('./home/index');

router.use('/user', userAuthRouter);
router.use('/admin', adminRouter);
router.use('/developer', developerRouter);
router.use('/', homeRouter);

module.exports = router;