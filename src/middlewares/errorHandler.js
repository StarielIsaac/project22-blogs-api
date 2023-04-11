// se existir error.status retorna um erro com status 500 com a mensagem do erro, se não
// retorna apenas um erro genérico
const ErrorLaunch = require('../utils/errorHandle');

module.exports = (error, _req, res, _next) => {
  if (error instanceof ErrorLaunch) {
    return res.status(error.code).json({ message: error.message });
  }
  
  if (error.status) return res.status(error.status).json({ message: error.message });
  
  return res.status(500).json({ message: 'internal server error' });
  };