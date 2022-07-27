const controller = require('./../../../controller');
const createError = require('http-errors');
const {StatusCodes: HttpStatus} = require('http-status-codes');
const {validateSchema} = require('./validator');
const {randomNumberGenarator} = require('../../utils/functions');
const {EXPIRES_IN} = require('./../../utils/constants');

class Controller extends controller {   
  async getOtp(req, res, next) {
    console.log(req.body);
    const {mobile} = req.body;
    await validateSchema.validateAsync(mobile);
    const result = await this.checkExistUser(mobile);
    if (!result) throw createError.BadRequest();
    const code = randomNumberGenarator();
    let otp = {
      code, 
      expiresIn: EXPIRES_IN
    };
    await this.User.updateOne(
      {mobile},
      {$set: otp}).then((user) => {
        console.log('user:', user);
        if (user.modifiedCount == 0) throw createError.BadRequest('otp update failed...');
        if (!user) throw createError.InternalServerError();
        res.status(HttpStatus.CREATED).json({
          statusCode: HttpStatus.CREATED,
          data : {
            user
          }
      })
    }).catch((error) => {
      next(error);
    })

  };
  async checkExistUser(mobile){
    await this.User.findOne({mobile}).then((user) => {
      return !!user;
    }).catch((error) => {
      next(error);
    })
  };
}

module.exports =  {
  Controller : new Controller()
}