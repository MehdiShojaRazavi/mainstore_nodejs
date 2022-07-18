const expressValidator = require('express-validator');
const check = expressValidator.check;

module.exports = new class{
  addUserValidator(){
    return [
      check('id')
        .not()
        .isEmpty()
        .withMessage('id cant be empty'),
      check('contact')
        .isObject()
        .withMessage('contact should be object'),
      check('profilePictureUrl')
        .not()
        .isEmpty()
        .withMessage('profilePictureUrl cant be empty'),
      check('username')
        .not()
        .isEmpty()
        .withMessage('username cant be empty'),
    ]
  }

  // loginValidator(){
  //   return [
  //     check('email')
  //       .isEmail()
  //       .withMessage('email is invalid'),
  //     check('password')
  //       .not()
  //       .isEmpty()
  //       .withMessage('password cant be empty'),
  //   ]
  // }
}