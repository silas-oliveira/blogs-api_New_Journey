const { Router } = require('express');
const categoryController = require('../../app/controller/category.controller');

const categoryRouter = Router();

categoryRouter.post('/', async (req, res, _next) => {
  const result = await categoryController.add(req.body, req.headers);
  return res.status(201).json(result);
});

categoryRouter.get('/', async (req, res, _next) => {
  const result = await categoryController.get(req.headers);
  return res.status(200).json(result);
});

module.exports = categoryRouter;