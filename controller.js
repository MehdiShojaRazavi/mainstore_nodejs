const autoBind = require('auto-bind');
const {validationResult} = require('express-validator');
const User = require('./src/models/user');

module.exports = class{
  constructor(){
    autoBind(this);
    console.log('**class**: ',User);
    this.User = User;
  }
 
  validationBody(req,res){
    const result = validationResult(req);
    if(!result.isEmpty()){
      const errors = result.array();
      const data = [];
      errors.forEach(err => data.push(err.msg));
      res.status(400).json({
        message: 'validation error',
        data: messages
      })
      return false;
    }
    return true;
  }

  validate(req,res,next){
    if(!this.validationBody(req,res)){
      return;
    }
    next();
  }

  // response({res, message,success=true, status=200, data={}}){
  //   res.status(status).json({
  //     status,
  //     success,
  //     message,
  //     data
  //   });
  // };

};