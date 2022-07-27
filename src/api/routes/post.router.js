const { Router } = require('express');
const postController = require('../../app/controller/post.controller');

const postRouter = Router();

postRouter.get('/search', async (req, res, _next) => {
  const result = await postController.search(req.headers, req.query);
  return res.status(200).json(result);
});

postRouter.post('/', async (req, res, _next) => {
  const result = await postController.add(req.body, req.headers);
  return res.status(201).json(result);
});

postRouter.get('/', async (req, res, _next) => {
  const result = await postController.list(req.headers);
  return res.status(200).json(result);
});

postRouter.get('/:id', async (req, res, _next) => {
  const result = await postController.get(req.headers, req.params);
  return res.status(200).json(result);
});

postRouter.put('/:id', async (req, res, _next) => {
  const result = await postController.edit(req.body, req.headers, req.params);
  return res.status(200).json(result);
});

postRouter.delete('/:id', async (req, res, _next) => {
  const result = await postController.delete(req.headers, req.params);
  return res.status(204).json(result);
});

module.exports = postRouter;