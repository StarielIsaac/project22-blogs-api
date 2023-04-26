const { validateToken } = require('../utils/auth');
// const errorMensage = require('../utils/errorMensage');

// middleware que verifica se o token é valido
const middValidateToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            // throw errorMensage(401, 'Token not found');
            return res.status(401).json({ message: 'Token not found' });
        }
        const validate = validateToken(token);
        req.user = validate;

        next();
      } catch (err) {
        next(err);
      }
};

module.exports = middValidateToken;
