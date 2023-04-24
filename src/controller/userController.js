const userService = require('../service/userService');

// Cria um novo usuário com base nos valores fornecidos na solicitação (request)
const createUser = async (req, res) => {
   const values = req.body;
   const result = await userService.createUser(values);
   return res.status(201).json(result);
};
// Obtém todos os usuários do banco de dados e os retorna em um objeto JSON
const listUsers = async (_req, res) => {
   const result = await userService.listUsers();
   return res.status(200).json(result);
};
// Obtém um único usuário do banco de dados com base no ID fornecido na solicitação (request),
// e o retorna em um objeto JSON
const findOneUser = async (req, res) => {
   const { id } = req.params;
   const result = await userService.findOneUser(id);
   return res.status(200).json(result);
};
// Exclui a conta do usuário atual com base em suas credenciais de autenticação
const deleteMyAccount = async (req, res) => {
   const { id } = req.user;
   await userService.deleteMyAccount(id);
   res.status(204).send();
};

// Exporta as funções do controlador para uso em outras partes do aplicativo
module.exports = { createUser, listUsers, findOneUser, deleteMyAccount };