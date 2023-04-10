const loginService = require('../service/loginService');

// camada de controller do login
const login = async (req, res) => {
   const { email, password } = req.body;
   const result = await loginService.findUser(email, password);
   return res.status(200).json(result);
};

module.exports = { login };