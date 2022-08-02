const controller = require('../../../controller');
const createError = require('http-errors');
const {StatusCodes: HttpStatus} = require('http-status-codes');
const {randomNumberGenarator, signAccessToken} = require('../../utils/functions');

class Controller {   
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