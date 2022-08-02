const controller = require('./../../../controller');
const createError = require('http-errors');
const {StatusCodes: HttpStatus} = require('http-status-codes');
const bcrypt = require('bcrypt');
class Controller extends controller {   
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
}

module.exports =  {
  Controller : new Controller()
}