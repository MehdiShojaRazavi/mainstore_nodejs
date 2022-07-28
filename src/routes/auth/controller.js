const controller = require('./../../../controller');
const createError = require('http-errors');
const {StatusCodes: HttpStatus} = require('http-status-codes');
const {validateSchema} = require('./validator');
const {randomNumberGenarator} = require('../../utils/functions');
const {EXPIRES_IN} = require('./../../utils/constants');

class Controller extends controller {   
  async getOtp(req, res, next) {
    try{
      const {mobile} = req.body;
      await validateSchema.validateAsync({mobile});
      //const result1 = await this.checkExistUser(mobile, next);
      //if (!result1) throw createError.NotFound("user not found");
      //console.log('result1:', result1);
      const code = randomNumberGenarator();
      let otp = {
        code, 
        expiresIn: EXPIRES_IN
      };
      const updateResult = await this.User.updateOne({mobile}, {$set: {otp}}, {upsert: true})
      if (updateResult.modifiedCount == 0 && updateResult.upsertedCount == 0) throw createError.Unauthorized();
      if (!updateResult) throw createError.InternalServerError();
      res.status(HttpStatus.CREATED).json({
        statusCode: HttpStatus.CREATED,
        data : {
          updateResult
        }
      });
    }catch(error){
      console.log('catch getOtp...')
      next(error);
    }
  };
  async checkExistUser(mobile, next){
    console.log('mobile:', mobile);
    try{
      const user = await this.User.findOne({mobile})
      return !!user;
    }catch(error){
      next(createError.InternalServerError(error.message));
    }
  };
}

module.exports =  {
  Controller : new Controller()
}