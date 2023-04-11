const { Router } = require('express');

const userController = require('../controller/userController');
const validadeUser = require('../middlewares/validadeUser');

const userRouter = Router();

userRouter.post('', validadeUser, userController.createUser);

module.exports = userRouter;