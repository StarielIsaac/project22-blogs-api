const categoriesService = require('../service/categoriesService');

// camada de controller do login

// função para criar nova categoria
const createNewCategories = async (req, res) => {
   const values = req.body;
   const result = await categoriesService.createNewCategories(values);
   return res.status(201).json(result);
};

// função para obter todas as categorias
const getAllCategories = async (_req, res) => {
   const result = await categoriesService.getAllCategories();
   return res.status(200).json(result);
};
// Exportação dos métodos
module.exports = { createNewCategories, getAllCategories };