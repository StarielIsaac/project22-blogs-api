const postService = require('../service/postService');

// camada de controller do login
const addNewPostAndBing = async (req, res) => {
   const values = req.body;
   const { id } = req.user;
   const result = await postService.addNewPostAndBing(values, id);
   return res.status(201).json(result);
};

const findBlogPosts = async (req, res) => {
 const result = await postService.findBlogPosts();
 return res.status(200).json(result);
};

const findOneBlogPost = async (req, res) => {
   const { id } = req.params;
   const result = await postService.findOneBlogPost(id);
   return res.status(200).json(result);
  };

module.exports = { addNewPostAndBing, findBlogPosts, findOneBlogPost };