// const Joi = require('joi').extend(require('@joi/date'));
const Joi = require('joi');

const someFieldsAreMissing = 'Some required fields are missing/400';

const postSchema = Joi.object({
  title:
    Joi.string()
      .required()
      .messages({
        'any.required': someFieldsAreMissing,
        'string.empty': someFieldsAreMissing,
      }),
  content:
    Joi.string()
      .required()
      .messages({
        'any.required': someFieldsAreMissing,
        'string.empty': someFieldsAreMissing,
      }),
  categoryIds:
    Joi.array()
      .required()
      .messages({
        'any.required': someFieldsAreMissing,
        'string.empty': someFieldsAreMissing,
      }),
}).required();

module.exports = postSchema;