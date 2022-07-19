// const Joi = require('joi').extend(require('@joi/date'));
const Joi = require('joi');

const categorySchema = Joi.object({
  name:
    Joi.string()
      .required()
      .messages({
        'any.required': '"name" is required/400',
        'string.empty': '"name" is required/400',
      }),
}).required();

module.exports = categorySchema;