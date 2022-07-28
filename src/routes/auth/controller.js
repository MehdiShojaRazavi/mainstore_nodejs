const controller = require('./../../../controller');
const createError = require('http-errors');
const {StatusCodes: HttpStatus} = require('http-status-codes');
const {getOtpSchema, checkOtpSchema} = require('./validator');
const {randomNumberGenarator, signAccessToken} = require('../../utils/functions');
const {EXPIRES_IN} = require('./../../utils/constants');

class Controller extends controller {   
  async getOtp(req, res, next) {
    try{
      const {mobile} = req.body;
      await getOtpSchema.validateAsync({mobile});
      const code = randomNumberGenarator();
      let otp = {
        code, 
        expiresIn: EXPIRES_IN
      };
      const user = await this.User.updateOne({mobile}, {$set: {otp}}, {upsert: true})
      if (user.modifiedCount == 0 && user.upsertedCount == 0) throw createError.Unauthorized();
      if (!user) throw createError.InternalServerError();
      res.status(HttpStatus.CREATED).json({
        statusCode: HttpStatus.CREATED,
        data : {
          user
        } 
      });
    }catch(error){
      next(error);
    }
  };

  async checkOtp(req, res, next){
    try{
      await checkOtpSchema.validateAsync(req.body);
      const {mobile, code} = req.body;
      const user = await this.User.findOne({mobile});
      if (!user) throw createError.NotFound('User not found')
      if (user.otp.code != code) throw createError.Unauthorized('Invalid code');
      const now = Date.now();
      if (+user.expiresIn > now) throw createError.Unauthorized('Code has expired');
      const token = await signAccessToken(user._id);
      res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data : {
          token
        }
      });
    }catch(error){
      next(error);
    }
  };

  async checkExistUser(mobile, next){
    try{
      const user = await this.User.findOne({mobile})
      return !!user;
    }catch(error){
      next(error);
    }
  };
}

module.exports =  {
  Controller : new Controller()
}