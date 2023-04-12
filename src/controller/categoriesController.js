const categoriesService = require('../service/categoriesService');

// camada de controller do login
const createNewCategories = async (req, res) => {
   const values = req.body;
   const result = await categoriesService.createNewCategories(values);
   return res.status(201).json(result);
};

module.exports = { createNewCategories };