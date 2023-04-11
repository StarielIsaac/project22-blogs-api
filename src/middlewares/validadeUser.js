const errorMensage = require('../utils/errorMensage');

const validadeUser = (req, res, next) => {
  const { displayName, email, password } = req.body;
  if (displayName.length < 8) {
    throw errorMensage(400, 'displayName length must be at least 8 characters long');
  }
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValed = regex.test(email);  

  if (!isValed) {
    throw errorMensage(400, 'email must be a valid email');
  }

  if (password.length < 6) {
    throw errorMensage(400, 'password length must be at least 6 characters long');
  }

  next();
};

module.exports = validadeUser;