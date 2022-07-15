// const Joi = require('joi').extend(require('@joi/date'));
const Joi = require('joi');

const userSchema = Joi.object({
  displayName:
    Joi.string()
      .min(8)
      .required()
      .messages({
        'any.required': 'Some required fields are missing/400',
        'string.empty': '"displayName" length must be at least 8 characters long/400',
        'string.min': '"displayName" length must be at least 8 characters long/400',
      }),
  email:
    Joi.string()
      .email()
      .required()
      .messages({
        'string.email': '"email" must be a valid email/400',
        'string.empty': '"email" must be a valid email/400',
      }),
  password:
    Joi.string()
      .min(6)
      .required()
      .messages({
        'string.base': '"email" must be a valid emai/400l',
        'string.empty': '"email" must be a valid email/400',
        'string.min': '"password" length must be at least 6 characters long/400',
      }),
}).required();

module.exports = userSchema;