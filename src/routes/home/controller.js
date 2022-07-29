const controller = require('../../../controller');
const createError = require('http-errors');
const {StatusCodes: HttpStatus} = require('http-status-codes');
const {getOtpSchema, checkOtpSchema} = require('./validator');
const {randomNumberGenarator, signAccessToken} = require('../../utils/functions');
const {EXPIRES_IN} = require('../../utils/constants');

class Controller extends controller {   
  async indexPage(req, res, next) {
    try{
      res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data : {
          data: "index page loaded"
        } 
      });
    }catch(error){
      next(error);
    }
  };
}

module.exports =  {
  Controller : new Controller()
}