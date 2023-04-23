const userService = require('../service/userService');

const createUser = async (req, res) => {
   const values = req.body;
   const result = await userService.createUser(values);
   return res.status(201).json(result);
};

const listUsers = async (_req, res) => {
   const result = await userService.listUsers();
   return res.status(200).json(result);
};

const findOneUser = async (req, res) => {
   const { id } = req.params;
   const result = await userService.findOneUser(id);
   return res.status(200).json(result);
};

const deleteMyAccount = async (req, res) => {
   const { id } = req.user;
   await userService.deleteMyAccount(id);
   res.status(204).send();
};

module.exports = { createUser, listUsers, findOneUser, deleteMyAccount };