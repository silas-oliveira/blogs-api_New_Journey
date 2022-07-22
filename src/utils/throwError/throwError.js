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
  'Token not found/401',
);
  
const userAlreadyExist = throwError(
  'userAlreadyExist',
  'User already registered/409',
);

const expiredOrInvalidToken = throwError(
  'expiredOrInvalidToken',
  'Expired or invalid token/401',
);

const userDoesNotExist = throwError(
  'userDoesNotExist',
  'User does not exist/404',
);

const categoryNotFound = throwError(
  'categoryNotFound',
  '"categoryIds" not found/400',
);

module.exports = {
  UnauthorizedError,
  tokeIsRequired,
  userAlreadyExist,
  expiredOrInvalidToken,
  userDoesNotExist,
  categoryNotFound,
};