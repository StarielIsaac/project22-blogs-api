const { Category } = require('../models');
// const ErrorLaunch = require('../utils/errorHandle');

// funcao que verifica se o token existe, se sim cria um token e retorna-o
const createNewCategories = async ({ name }) => {
    const category = await Category.create({ name });
    // if () {
    //   throw new ErrorLaunch();
    // }

    return category;
  };
  
  module.exports = { createNewCategories };