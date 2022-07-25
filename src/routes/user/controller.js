const service = require('./../../../controller');
const createError = require('http-errors');
const {StatusCodes: HttpStatus} = require('http-status-codes')

class Controller extends service {   
  async getUsers(req, res, next){
    await this.User.aggregate([
    {
      $project : {_id : 0, __v : 0, 'contact._id' : 0}
    }
    ]).then((users) => {
      if (users.length < 1) throw createError.NotFound();
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
    console.log(req.params.id);
    await this.User.aggregate([
        {
          $match : {id}
        },
        {
          $project : {_id : 0, __v : 0, 'contact._id' : 0}
        }
      ]).then((users) => {
      if (!users) throw createError.NotFound();
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
}

module.exports =  {
  Controller : new Controller()
}