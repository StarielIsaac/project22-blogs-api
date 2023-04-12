const { Router } = require('express');

const postController = require('../controller/postController');
const middTokenValidade = require('../middlewares/MiddTokenValidade');
const validadePost = require('../middlewares/validadePost');

const postRouter = Router();

postRouter.post('', middTokenValidade, validadePost, postController.addNewPostAndBing);
// middTokenValidade
module.exports = postRouter;