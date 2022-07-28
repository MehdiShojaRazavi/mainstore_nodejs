const joi = require('@hapi/joi');
const validateSchema = joi.object({
  mobile: joi.string().length(11).pattern(/^09[0-9]{9}$/).required(),
});
module.exports ={
  validateSchema
}