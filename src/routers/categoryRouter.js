// Importa o Router do pacote express
const { Router } = require('express');

const categoriesController = require('../controller/categoriesController');
const tokenValidade = require('../middlewares/MiddTokenValidade');
const validadeName = require('../middlewares/validadeName');

const categoriesRouter = Router();

// Configura a rota para listar todas as categorias
categoriesRouter.get('', tokenValidade, categoriesController.getAllCategories);
// Configura a rota para criar uma nova categoria, com middleware para validar o nome e o token
categoriesRouter.post('', tokenValidade, validadeName, categoriesController.createNewCategories);

// Exporta a rota
module.exports = categoriesRouter;