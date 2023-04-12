const categoriesService = require('../service/categoriesService');

// camada de controller do login
const createNewCategories = async (req, res) => {
   const values = req.body;
   const result = await categoriesService.createNewCategories(values);
   return res.status(201).json(result);
};

const getAllCategories = async (_req, res) => {
   const result = await categoriesService.getAllCategories();
   return res.status(200).json(result);
};

module.exports = { createNewCategories, getAllCategories };