const joi = require('@hapi/joi');
const validateSchema = joi.object({
  username: joi.string().trim().min(6).max(16).required(),
  email: joi.string().trim().lowercase().email().required().error(new Error('Email must be valid...')),
  mobile: joi.string().length(11).pattern(/^09[0-9]{9}$/).required()
});
module.exports ={
  validateSchema
}