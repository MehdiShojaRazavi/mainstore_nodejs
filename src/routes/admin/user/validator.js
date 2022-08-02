const joi = require('@hapi/joi');
const createError = require('http-errors');
const validateSchema = joi.object({
  username: joi.string().trim().min(6).max(16).required().error(createError.BadRequest('Username must be between 6 to 16 characters')),
  email: joi.string().trim().lowercase().email().required().error(createError.BadRequest('Email must be valid')),
  mobile: joi.string().length(11).pattern(/^09[0-9]{9}$/).required().error(createError.BadRequest('Mobile must be at least 11 characters'))
});
module.exports ={
  validateSchema
}