const autoBind = require('auto-bind');
const {User} = require('./src/models/user');

module.exports = class{
  constructor(){
    autoBind(this);
    this.User = User;
  }

};