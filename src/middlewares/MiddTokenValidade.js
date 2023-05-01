const { validateToken } = require('../utils/auth');

// middleware que verifica se o token é valido
const middValidateToken = async (req, res, next) => {
    try {
        // Obtém o token enviado no cabeçalho da requisição
        const token = req.headers.authorization;
        
        // Caso o token não tenha sido enviado, retorna um erro
        if (!token) {
            return res.status(401).json({ message: 'Token not found' });
        }
        // Valida o token
        const validate = validateToken(token);
        // Armazena as informações do usuário contidas no token na requisição
        req.user = validate;

        // Chama o próximo middleware
        next();
      } catch (err) {
        // Caso ocorra algum erro na validação do token, repassa o erro para o middleware de tratamento de erros
        next(err);
      }
};

module.exports = middValidateToken;
