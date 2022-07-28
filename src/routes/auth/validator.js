const joi = require('@hapi/joi');
const createError = require('http-errors');
const getOtpSchema = joi.object({
  mobile: joi.string().length(11).pattern(/^09[0-9]{9}$/).required().error(createError.BadRequest('Mobile must be at least 11 characters')),
});
const checkOtpSchema = joi.object({
  mobile: joi.string().length(11).pattern(/^09[0-9]{9}$/).required().error(createError.BadRequest('Mobile must be at least 11 characters')),
  code: joi.string().min(4).max(6).required().error(createError.BadRequest('Invalid received code'))
});
module.exports ={
  getOtpSchema,
  checkOtpSchema
}