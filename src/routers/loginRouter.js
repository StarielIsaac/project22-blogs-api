const { Router } = require('express');

const loginController = require('../controller/loginController');
const validadeUserExist = require('../middlewares/validadeUserExist');

const loginRouter = Router();

loginRouter.post('', validadeUserExist, loginController.login);

module.exports = loginRouter;