// Importa o Router do pacote express
const { Router } = require('express');

const loginController = require('../controller/loginController');
const validadeLogin = require('../middlewares/validadeLogin');

const loginRouter = Router();

// Define a rota POST para o login, com o middleware de validação do login e o controller de login
loginRouter.post('', validadeLogin, loginController.login);

// Exporta a rota
module.exports = loginRouter;