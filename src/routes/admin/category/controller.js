const createError = require('http-errors');
const {StatusCodes: HttpStatus} = require('http-status-codes');
const {addCategorySchema} = require('./validator');
const { Category } = require('./../../../models/category');

class Controller {
  async addCategory(req, res, next) {
    await addCategorySchema.validateAsync(req.body);
    const {title, parent} = req.body;
    console.log(title, parent);
    await Category.create({
      title,
      parent
    }).then((category) => {
      if (!category) throw createError.InternalServerError();
      res.status(HttpStatus.CREATED).json({
        statusCode: HttpStatus.CREATED,
        data : {
          category
        },
        message: 'Added category successfully'
      })
    }).catch((error) => {
      next(error);
    })
  };
}

module.exports =  {
  Controller : new Controller()
}