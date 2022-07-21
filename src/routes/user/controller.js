const service = require('./../../../controller');
const createError = require('http-errors');
const {StatusCodes: HttpStatus} = require('http-status-codes')
module.exports =  new (class extends service {

  async getUsers(req, res){
    await this.User.find().then((users) => {
      res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data : {
          users
        }
      })
    }).catch((error) => {
      next(error);
    })
  }

  async getUserById(req, res, next){
    const id = req.params.id;
    await this.User.find({id}).then((users) => {
      if (users.length < 1) throw createError.NotFound();
      res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data : {
          users
        }
      })
    }).catch((error) => {
      console.log('next error ....');
      next(error);
    })
  }

  async addUser(req, res, next) {
    console.log(req.body);
    const {id, username} = req.body;
    await this.User.create({
      id,
      username
    }).then((user) => {
      if (!user) throw createError.InternalServerError();
      res.status(HttpStatus.CREATED).json({
        statusCode: HttpStatus.CREATED,
        data : {
          user
        }
      })
    }).catch((error) => {
      console.log('next error ....');
      next(error);
    })

 }
})();