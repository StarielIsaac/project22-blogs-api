const { Router } = require('express');

const categoriesController = require('../controller/categoriesController');
const tokenValidade = require('../middlewares/MiddTokenValidade');
const validadeName = require('../middlewares/validadeName');
// const midd = require('../middlewares/');

const categoriesRouter = Router();

categoriesRouter.post('', tokenValidade, validadeName, categoriesController.createNewCategories);

module.exports = categoriesRouter;