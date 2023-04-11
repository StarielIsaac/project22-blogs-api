const userService = require('../service/userService');

const createUser = async (req, res) => {
   const values = req.body;
   const result = await userService.createUser(values);
   return res.status(201).json(result);
};

module.exports = { createUser };