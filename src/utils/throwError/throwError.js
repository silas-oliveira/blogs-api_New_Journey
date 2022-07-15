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
  
const userAlreadyExist = throwError(
  'userAlreadyExist',
  'User already registered/409',
);

module.exports = {
  UnauthorizedError,
  tokeIsRequired,
  userAlreadyExist,
};