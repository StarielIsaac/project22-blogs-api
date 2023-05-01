const { Category } = require('../models');

// Cria uma nova instância de Category com o nome recebido como parâmetro e salva no banco de dados.
const createNewCategories = async ({ name }) => {
    const category = await Category.create({ name });

    return category;
  };
  
  // Busca todas as categorias cadastradas no banco de dados.
  const getAllCategories = async () => {
    const allCategory = await Category.findAll();
    
    return allCategory;
  };
  
  // Exporta as funções createNewCategories e getAllCategories
  module.exports = { createNewCategories, getAllCategories };