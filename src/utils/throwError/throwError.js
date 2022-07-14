const throwError = (name, defaultMessage = '') => (message = defaultMessage) => {
  const error = new Error(message);
  error.name = name;
  throw error;
};

const UnauthorizedError = throwError(
  'UnauthorizedError', 
  'Invalid fields/400',
);
const tokeIsRequired = throwError(
  'tokeIsRequired', 
  'Token é obrigatório/400',
  );

module.exports = {
  UnauthorizedError,
  tokeIsRequired,
};