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

module.exports = { createUser, listUsers };