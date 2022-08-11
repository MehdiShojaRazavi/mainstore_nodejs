const joi = require('@hapi/joi');
const createError = require('http-errors');
const CreateBlogSchema = joi.object({
  title: joi.string().min(3).max(30).error(createError.BadRequest('Title must be between 3 to 30 characters')),
  text: joi.string().error(createError.BadRequest('Text is invalid')),
  short_text: joi.string().error(createError.BadRequest('Text is invalid')),
  image: joi.string().error(createError.BadRequest('Image is invalid')),
  tags: joi.array().min(0).max(20).error(createError.BadRequest('Tags must be at least 20 characters')),
  category: joi.string().trim().hex().length(24)
});

module.exports ={
  CreateBlogSchema
}