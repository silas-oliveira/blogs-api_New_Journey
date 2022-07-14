const express = require('express');
require('express-async-errors'); 
const { errorHandler } = require('./api/middlewares/error.middleware');
// const userRouter = require('./api/routes/user.router');

const app = express();

app.use(express.json());

// app.use('/login', userRouter);

app.use(errorHandler);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
