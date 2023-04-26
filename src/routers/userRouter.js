const { Router } = require('express');

const userController = require('../controller/userController');
const validadeUser = require('../middlewares/validadeUser');
const middValidateToken = require('../middlewares/MiddTokenValidade');

// Cria uma instância do Router do Express para as rotas de usuário.
const userRouter = Router();

userRouter.post('', validadeUser, userController.createUser);

userRouter.get('', middValidateToken, userController.listUsers);

userRouter.get('/:id', middValidateToken, userController.findOneUser);

userRouter.delete('/me', middValidateToken, userController.deleteMyAccount);

module.exports = userRouter;
