const autoBind = require('auto-bind');
const {User} = require('./src/models/user');
const {Category} = require('./src/models/category');

module.exports = class{
  constructor(){
    autoBind(this);
    this.User = User;
    this.Category = Category;
  }

};