const postService = require('../service/postService');

// adiciona um novo post e bind
const addNewPostAndBing = async (req, res) => {
   const values = req.body;
   const { id } = req.user;
   const result = await postService.addNewPostAndBing(values, id);
   return res.status(201).json(result);
};
// busca todos os posts registrados
const findAllBlogPosts = async (req, res) => {
 const result = await postService.findBlogPosts();
 return res.status(200).json(result);
};
// busca todos um post pelo ID
const findOneBlogPost = async (req, res) => {
   const { id } = req.params;
   const result = await postService.findOneBlogPost(id);
   return res.status(200).json(result);
  };
// atualiza um post pelo ID
const updateOneBlogPost = async (req, res) => {
   const { id } = req.params;
   const values = req.body;
   const { id: userId } = req.user;

   const result = await postService.updateOneBlogPost(id, values, userId);
   return res.status(200).json(result);
  };
  
module.exports = { addNewPostAndBing, findAllBlogPosts, findOneBlogPost, updateOneBlogPost };