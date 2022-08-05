const createError = require('http-errors');
const {StatusCodes: HttpStatus} = require('http-status-codes');
const {addCategorySchema} = require('./validator');
const { Category: CategoryModel } = require('./../../../models/category');

class Controller {
  async addCategory(req, res, next) {
    try{
      const {title, parent} = req.body;
      await addCategorySchema.validateAsync(req.body);
      const category = await CategoryModel.create({title, parent});
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
      const category = await CategoryModel.aggregate([
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
  async getChildOfParents(req, res, next) {
    try{
      const {parent} = req.params;
      console.log(parent);
      const category = await CategoryModel.find({parent}, {__v: 0, parent: 0});
      // const category = await CategoryModel.aggregate([
      //   {$match: {parent}},
      //   {$project: {__v:0}}
      // ]);
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