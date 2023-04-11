const { Router } = require('express');

const loginController = require('../controller/loginController');
const validadeLogin = require('../middlewares/validadeLogin');

const loginRouter = Router();

loginRouter.post('', validadeLogin, loginController.login);

module.exports = loginRouter;