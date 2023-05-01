// Importa as dependências necessárias
const { TokenExpiredError, JsonWebTokenError } = require('jsonwebtoken');
const ErrorLaunch = require('../utils/errorHandle');

// se existir error.status retorna um status especifico, com a mensagem.
// mas se houver um erro inesperado retorna com status 500 com a mensagem 'internal server error'.
// Middleware de tratamento de erros, que recebe como parâmetro o objeto `error`.
module.exports = (error, _req, res, _next) => {
    // Verifica se o erro é uma instância da classe ErrorLaunch
  if (error instanceof ErrorLaunch) {
    return res.status(error.code).json({ message: error.message });
  }
  // Verifica se o erro é uma instância da classe TokenExpiredError ou JsonWebTokenError
  // que tratam erros relacionados a tokens JWT inválidos
  if (error instanceof TokenExpiredError || error instanceof JsonWebTokenError) {
    return res.status(401).json({ message: 'Expired or invalid token' });
} 
  // Verifica se o erro possui um status definido
  if (error.status) return res.status(error.status).json({ message: error.message });
  
  // caso contrário retorna um status 500 (erro interno do servidor)
  return res.status(500).json({ message: 'internal server error' });
  };