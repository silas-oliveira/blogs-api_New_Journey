const { Router } = require('express');
const userController = require('../../app/controller/user.controller');

const userRouter = Router();

userRouter.post('/', async (req, res, _next) => {
  const result = await userController.add(req.body);
  return res.status(201).json({ token: result });
});

userRouter.get('/', async (req, res, _next) => {
  const result = await userController.list(req.headers);
  return res.status(200).json(result);
});

userRouter.get('/:id', async (req, res, _next) => {
  const result = await userController.get(req.params, req.headers);
  return res.status(200).json(result);
});

userRouter.delete('/me', async (req, res, _next) => {
  const result = await userController.delete(req.headers);
  return res.status(204).json(result);
});

module.exports = userRouter;