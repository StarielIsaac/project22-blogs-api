const loginService = require('../service/loginService');

// Este é o controller de login
const login = async (req, res) => {
   // Extrai email e senha do corpo da requisição
   const { email, password } = req.body; 
   // Chama o método findUser do serviço de login
   const result = await loginService.findUser(email, password);
   // Retorna o resultado como um objeto JSON com status 200 OK
   return res.status(200).json(result); 
};

module.exports = { login };