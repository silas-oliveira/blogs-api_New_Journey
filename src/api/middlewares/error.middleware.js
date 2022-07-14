const errorHandler = (err, _req, res, _next) => {
  const { message } = err;
  
  if (err) {
    const [msg, status] = message.split('/');
    console.log('msg', msg);
    res.status(Number(status)).json({ message: msg });
  }
};

module.exports = { errorHandler }; 