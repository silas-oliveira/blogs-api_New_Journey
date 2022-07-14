const { Router } = require('express');
const userController = require('../../app/controller/user.controller');

const userRouter = Router();

userRouter.post('/', async (req, res, _next) => {
  const result = await userController.login(req.body);
  return res.status(200).json({ token: result });
});

module.exports = userRouter;