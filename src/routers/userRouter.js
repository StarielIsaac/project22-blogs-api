const { Router } = require('express');

const userController = require('../controller/userController');
const validadeUser = require('../middlewares/validadeUser');
const middTokenValidade = require('../middlewares/MiddTokenValidade');

const userRouter = Router();

userRouter.post('', validadeUser, userController.createUser);
userRouter.get('', middTokenValidade, userController.listUsers);

module.exports = userRouter;