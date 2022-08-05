const createError = require('http-errors');
const {StatusCodes: HttpStatus} = require('http-status-codes');
const {addCategorySchema} = require('./validator');
const { Category } = require('./../../../models/category');

class Controller {
  async addCategory(req, res, next) {
    try{
      const {title, parent} = req.body;
      await addCategorySchema.validateAsync(req.body);
      const category = await Category.create({title, parent});
      if (!category) throw createError.InternalServerError();
      res.status(HttpStatus.CREATED).json({
        statusCode: HttpStatus.CREATED,
        data : {
          category
        },
        message: 'Added category successfully'
      })
    }catch(error) {
      next(error);
    };
  };
  async getAllParents(req, res, next) {
    try{
      const category = await Category.aggregate([
        {$match: {parent: undefined}},
        {$project: {__v:0}}
      ]);
      if (!category) throw createError.InternalServerError();
      res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data : {
          category
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