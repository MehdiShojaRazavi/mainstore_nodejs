const createError = require('http-errors');
const {StatusCodes: HttpStatus, StatusCodes} = require('http-status-codes');
const { CreateBlogSchema } = require('./validator');
const { BlogModel } = require('./../../../models/category');
class Controller {
  async getAllBlogs(req, res, next) {
    try{
      const blog = await BlogModel.find({});
      if (!blog) throw createError.InternalServerError();
      res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data : {
          blog
        }
      })
    }catch(error) {
      next(error);
    };
  };
}

module.exports =  {
  Controller : new Controller()
}