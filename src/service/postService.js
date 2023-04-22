const { BlogPost, PostCategory, User, Category } = require('../models');

// throw new ErrorLaunch('User already registered', 409);
const addNewPostAndBing = async ({ content, categoryIds, title }, userId) => {
    // console.log(content, categoryIds, title, id)

    // model que cria um novo post personalizado no db, com as informaçẽos passadas na request
    const newPost = await BlogPost.create({
        title, 
        content,
        userId, 
        published: new Date(), 
        updated: new Date(),
    });

    // aguarda todos as catetorias serem vinculadas aos posts
    await Promise.all(categoryIds.map((el) => PostCategory.create({
        postId: newPost.id, 
        categoryId: el,
    })));

    return newPost;
};

const findBlogPosts = async () => {
     // Obtém todos os posts do blog
     const allBlogPosts = await BlogPost.findAll();
     
     // Aguarda todas as promises serem resolvidas e retorna um array com todos os posts, 
     // onde cada post tem um objeto de usuário e um array de categorias associados a ele
     const postsWithUserAndCategories = await Promise.all(
         allBlogPosts.map(async (post) => {
             // Obtém o objeto de usuário associado ao post
             const user = await User.findOne({ 
                 where: { id: post.id }, 
                 attributes: ['id', 'displayName', 'email', 'image'], 
             });
 
             // Obtém um array de objetos de categoria associados ao post
             const categories = await Category.findAll({ 
                 where: { id: post.id }, 
             });
 
             // Retorna um objeto que combina as propriedades do post, o objeto de usuário e o array de categorias
             return { 
                 ...post.dataValues, 
                 user,
                 categories,
             };
         }),
     );
 
     // Retorna o array de posts com os objetos de usuário e as categorias associadas a cada post
     return postsWithUserAndCategories;
};

module.exports = { addNewPostAndBing, findBlogPosts };