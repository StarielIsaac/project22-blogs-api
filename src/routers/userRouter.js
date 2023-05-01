// Importa o Router do pacote express
const { Router } = require('express');

const userController = require('../controller/userController');
const validadeUser = require('../middlewares/validadeUser');
const middValidateToken = require('../middlewares/MiddTokenValidade');

// Cria uma instância do Router do Express para as rotas de usuário.
const userRouter = Router();

// Rota para criar um novo usuário
userRouter.post('', validadeUser, userController.createUser);
// Rota para listar todos os usuários
userRouter.get('', middValidateToken, userController.listUsers);
// Rota para buscar um usuário por ID
userRouter.get('/:id', middValidateToken, userController.findOneUser);
// Rota para deletar a conta do usuário logado
userRouter.delete('/me', middValidateToken, userController.deleteMyAccount);

// Exporta a rota
module.exports = userRouter;
