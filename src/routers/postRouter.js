// Importa o Router do pacote express
const { Router } = require('express');

const postController = require('../controller/postController');
const middTokenValidade = require('../middlewares/MiddTokenValidade');
const validadePost = require('../middlewares/validadePost');
const validadefields = require('../middlewares/validadefields');

const postRouter = Router();

// Rota para pesquisar posts pelo termo de busca
postRouter.get('/search', middTokenValidade, postController.findPostByTerm);
// Rota para buscar todos os posts do blog
postRouter.get('', middTokenValidade, postController.findAllBlogPosts);
// Rota para buscar um post do blog por ID
postRouter.get('/:id', middTokenValidade, postController.findOneBlogPost);
// Rota para atualizar um post do blog por ID
postRouter.put('/:id', middTokenValidade, validadefields, postController.updateOneBlogPost);
// Rota para adicionar um novo post no blog e fazer o binding com categorias
postRouter.post('', middTokenValidade, validadePost, postController.addNewPostAndBing);
// Rota para excluir um post do blog por ID
postRouter.delete('/:id', middTokenValidade, postController.deleteOnePostByID);

// Exporta a rota
module.exports = postRouter;