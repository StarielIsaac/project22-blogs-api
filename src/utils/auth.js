const jwt = require('jsonwebtoken');

const securityKey = process.env.JWT_SECRET;

const config = {
    expiresIn: '5d',
    algorithm: 'HS256',
};

const createToken = (payload) => {
  const createdToken = jwt.sign(payload, securityKey, config);
  return createdToken;
};
  
const validateToken = (token) => {
  const isValid = jwt.verify(token, securityKey);
  return isValid;
};

module.exports = {
    createToken,  
    validateToken,
};
