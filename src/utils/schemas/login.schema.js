// const Joi = require('joi').extend(require('@joi/date'));
const Joi = require('joi');

const loginSchema = Joi.object({
  email:
    Joi.string()
      .required()
      .messages({
        'any.required': 'Some required fields are missing/400',
        'string.empty': 'Some required fields are missing/400',
      }),
  password:
    Joi.string()
      .required()
      .messages({
        'any.required': 'Some required fields are missing/400',
        'string.empty': 'Some required fields are missing/400',
      }),
}).required();

module.exports = loginSchema;