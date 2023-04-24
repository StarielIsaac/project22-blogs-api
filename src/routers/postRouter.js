const { Router } = require('express');

const postController = require('../controller/postController');
const middTokenValidade = require('../middlewares/MiddTokenValidade');
const validadePost = require('../middlewares/validadePost');
const validadefields = require('../middlewares/validadefields');

const postRouter = Router();

postRouter.get('/search', middTokenValidade, postController.findPostByTerm);

postRouter.get('', middTokenValidade, postController.findAllBlogPosts);

postRouter.get('/:id', middTokenValidade, postController.findOneBlogPost);

postRouter.put('/:id', middTokenValidade, validadefields, postController.updateOneBlogPost);

postRouter.post('', middTokenValidade, validadePost, postController.addNewPostAndBing);

postRouter.delete('/:id', middTokenValidade, postController.deleteOnePostByID);

module.exports = postRouter;