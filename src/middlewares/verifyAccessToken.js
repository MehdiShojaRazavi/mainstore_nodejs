const createError = require('http-errors');
const jwt = require('jsonwebtoken');
const { User } = require('../models/user');
const { ACCESS_TOKEN_SECRET_KEY } = require('../utils/constants');
function verifyAccessToken(req, res, next){
  const headers = req.headers;
  const [bearer, token] = headers?.['access-token']?.split(' ') || [];
  if (token && bearer?.toLowerCase() == "bearer"){
    jwt.verify(token, ACCESS_TOKEN_SECRET_KEY, async (err, payload) => {
      if (err) next(createError.Unauthorized("Please login"));
      const {mobile} = payload || {};
      const user = await User.findOne({mobile});
      if (!user) next(createError.NotFound('Account not found'));
      res.user = user;
      return next();
    })
  }
  else return next(createError.Unauthorized("Please login"));
};
module.exports = {
  verifyAccessToken
}