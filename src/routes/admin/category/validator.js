const joi = require('@hapi/joi');
const createError = require('http-errors');
const { MongoIDPattern } = require('../../../utils/constants');
const addCategorySchema = joi.object({
  title: joi.string().min(3).max(30).error(createError.BadRequest('Title must be between 3 to 30 characters')),
  parent: joi.string().trim().hex().length(24).optional().allow('')
});
const idCategorySchema = joi.object({
  categoryId: joi.string().hex().length(24).error(createError.BadRequest('Category id is invalid'))
});
const titleCategorySchema = joi.object({
  title: joi.string().min(3).max(30).error(createError.BadRequest('Title must be between 3 to 30 characters'))
})
module.exports ={
  addCategorySchema,
  idCategorySchema,
  titleCategorySchema
}