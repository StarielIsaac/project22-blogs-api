const { Router } = require('express');

const userController = require('../controller/userController');
const validadeUser = require('../middlewares/validadeUser');
const middValidateToken = require('../middlewares/MiddTokenValidade');

const userRouter = Router();

userRouter.post('', validadeUser, userController.createUser);
userRouter.get('', middValidateToken, userController.listUsers);
userRouter.get('/:id', middValidateToken, userController.findOneUser);
userRouter.delete('/me', middValidateToken, userController.deleteMyAccount);
module.exports = userRouter;
