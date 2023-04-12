const postService = require('../service/postService');

// camada de controller do login
const addNewPostAndBing = async (req, res) => {
   const values = req.body;
   const { id } = req.user;
   const result = await postService.addNewPostAndBing(values, id);
   return res.status(201).json(result);
};

module.exports = { addNewPostAndBing };