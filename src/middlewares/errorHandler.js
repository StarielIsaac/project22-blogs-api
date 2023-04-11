// se existir error.status retorna um erro com status 500 com a mensagem do erro, se não
// retorna apenas um erro genérico
const { TokenExpiredError, JsonWebTokenError } = require('jsonwebtoken');
const ErrorLaunch = require('../utils/errorHandle');

module.exports = (error, _req, res, _next) => {
  if (error instanceof ErrorLaunch) {
    return res.status(error.code).json({ message: error.message });
  }
  if (error instanceof TokenExpiredError) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  if (error instanceof JsonWebTokenError) {
      return res.status(401).json({ message: 'Expired or invalid token' });
  }
  
  if (error.status) return res.status(error.status).json({ message: error.message });
  
  return res.status(500).json({ message: 'internal server error' });
  };