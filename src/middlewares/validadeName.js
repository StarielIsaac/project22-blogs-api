const errorMensage = require('../utils/errorMensage');

const validadeName = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    throw errorMensage(400, '"name" is required');
  }
  next();
};

module.exports = validadeName;