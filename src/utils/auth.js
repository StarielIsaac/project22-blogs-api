const jwt = require('jsonwebtoken');

// Lê a chave secreta para assinatura do token do ambiente
const securityKey = process.env.JWT_SECRET;

// Configurações para criação e validação do token
const config = {
    expiresIn: '5d',
    algorithm: 'HS256',
};

// Função para criar um novo token com base no payload informado
const createToken = (payload) => {
  const createdToken = jwt.sign(payload, securityKey, config);
  return createdToken;
};

// Função para validar um token já existente
const validateToken = (token) => {
  const isValid = jwt.verify(token, securityKey);
  return isValid;
};

// Exporta as funções de criação e validação de token para uso em outras partes do código
module.exports = {
    createToken,  
    validateToken,
};
