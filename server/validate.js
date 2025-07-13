const { body } = require('express-validator');

const postValidation = [
  body('title').notEmpty().withMessage('Title is required'),
  body('content').notEmpty().withMessage('Content is required'),
];

const categoryValidation = [
  body('name').notEmpty().withMessage('Category name is required'),
];

module.exports = { postValidation, categoryValidation };
