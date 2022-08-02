const {StatusCodes: HttpStatus} = require('http-status-codes');
const bcrypt = require('bcrypt');
const { randomNumberGenarator } = require('./../../utils/functions');

class Controller {   
  hashPassword(req, res, next){
    try{
      const { password } = req.params;
      const salt = bcrypt.genSaltSync(10);
      const hashPassword = bcrypt.hashSync(password, salt);
      res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data : {
          hashPassword
        }
      });
    }catch(error){
      next(error);
    }
  };
  getRandomNumber(req, res, next){
    try{
      const randomNumber = randomNumberGenarator().toString();
      res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data : {
          randomNumber
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