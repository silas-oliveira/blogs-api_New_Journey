const express = require('express');
require('express-async-errors'); 
const { errorHandler } = require('./api/middlewares/error.middleware');
const authRouter = require('./api/routes/auth.router');
const categoryRouter = require('./api/routes/category.router');
const userRouter = require('./api/routes/user.router');

const app = express();

app.use(express.json());

app.use('/login', authRouter);
app.use('/user', userRouter);
app.use('/categories', categoryRouter);

app.use(errorHandler);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
