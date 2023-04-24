const postService = require('../service/postService');

// Adiciona um novo post e bind
const addNewPostAndBing = async (req, res) => {
   const values = req.body;
   const { id } = req.user;
   const result = await postService.addNewPostAndBing(values, id);
   return res.status(201).json(result);
};
// Busca todos os posts registrados
const findAllBlogPosts = async (req, res) => {
 const result = await postService.findAllBlogPosts();
 return res.status(200).json(result);
};
// Busca todos um post pelo 'ID'
const findOneBlogPost = async (req, res) => {
   const { id } = req.params;
   const result = await postService.findOneBlogPost(id);
   return res.status(200).json(result);
  };
// Atualiza um post pelo 'ID'
const updateOneBlogPost = async (req, res) => {
   const { id } = req.params;
   const values = req.body;
   const { id: userId } = req.user;

   const result = await postService.updateOneBlogPost(id, values, userId);
   return res.status(200).json(result);
  };
// Deleta um post pelo 'ID'
const deleteOnePostByID = async (req, res) => {
   const { id } = req.params;
   const { id: userId } = req.user;

   await postService.deleteOnePostByID(id, userId);

   res.status(204).end();
};
// Busca informaçoẽs de um post especifico pelo termo passado na URL -> /post/search?q=:searchTerm
const findPostByTerm = async (req, res) => {
   const { q: term } = req.query;
      
   const result = await postService.findPostByTerm(term);
      
   res.status(200).json(result);
};

module.exports = {
    addNewPostAndBing, 
    findAllBlogPosts, 
    findOneBlogPost, 
    updateOneBlogPost,
    deleteOnePostByID,
    findPostByTerm,
};