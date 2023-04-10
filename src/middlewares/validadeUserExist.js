const errorMensage = require('../utils/errorMensage');

const validateUser = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw errorMensage(400, 'Some required fields are missing');
  }
  next();
};

module.exports = validateUser;