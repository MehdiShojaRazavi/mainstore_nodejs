const createError = require('http-errors');
const {StatusCodes: HttpStatus} = require('http-status-codes');
const {addCategorySchema} = require('./validator');
const { Category } = require('./../../../models/category');

class Controller {
  async addCategory(req, res, next) {
    try{
      const reqObj = req.body;
      await addCategorySchema.validateAsync(req.body);
      for (const [key, value] of Object.entries(reqObj)) {
        value ? null : delete reqObj[key]
      }
      const category = await Category.create(reqObj);
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
}

module.exports =  {
  Controller : new Controller()
}