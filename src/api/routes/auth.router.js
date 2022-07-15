const { Router } = require('express');
const authController = require('../../app/controller/auth.controller');

const authRouter = Router();

authRouter.post('/', async (req, res, _next) => {
  const result = await authController.login(req.body);
  return res.status(200).json({ token: result });
});

module.exports = authRouter;