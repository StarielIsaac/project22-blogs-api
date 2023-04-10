const loginService = require('../service/loginService');

// camada de controller do login
const login = async (req, res) => {
   const values = req.body;
   const result = await loginService.login(values);
   return res.status(201).json(result);
};

module.exports = { login };