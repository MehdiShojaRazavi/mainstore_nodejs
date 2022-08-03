const joi = require('@hapi/joi');
const createError = require('http-errors');
const { MongoIDPattern } = require('../../../utils/constants');
const addCategorySchema = joi.object({
  title: joi.string().min(3).max(30).required().error(createError.BadRequest('Title must be between 3 to 30 characters')),
  parent: joi.string().allow('').pattern(MongoIDPattern).error(createError.BadRequest('parent is invalid'))
});
module.exports ={
  addCategorySchema
}