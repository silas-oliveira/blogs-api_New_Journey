const { Router } = require('express');
const postController = require('../../app/controller/post.controller');

const postRouter = Router();

postRouter.post('/', async (req, res, _next) => {
  const result = await postController.add(req.body, req.headers);
  return res.status(201).json(result);
});

module.exports = postRouter;