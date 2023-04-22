const { BlogPost, PostCategory, User, Category } = require('../models');
const ErrorLaunch = require('../utils/errorHandle');

// Cria um novo post no banco de dados com as informações passadas na request
const addNewPostAndBing = async ({ content, categoryIds, title }, userId) => {
   const newPost = await BlogPost.create({
    title, 
    content,
    userId, 
    published: new Date(), 
    updated: new Date(),
});

// Aguarda todos as categorias serem vinculadas ao post através de um relacionamento muitos para muitos
await Promise.all(categoryIds.map((el) => PostCategory.create({
    postId: newPost.id, 
    categoryId: el,
})));

// Retorna o novo post criado
return newPost;
};

// Busca informações de todos os posts, com as categorias associadas a cada post e usuario.
const findAllBlogPosts = async () => {
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

// Busca um post específico com base no ID
const findOneBlogPost = async (id) => {
    const oneBlogPost = await BlogPost.findOne({ where: { id } });

    // Se não houver um post com o ID fornecido, lança um erro
    if (!oneBlogPost) {
        throw new ErrorLaunch('Post does not exist', 404);
    }

    // Busca informações do autor do post
    const user = await User.findOne({ 
        where: { id }, 
        attributes: ['id', 'displayName', 'email', 'image'], 
    });

    // Busca as categorias associadas ao post
    const categories = await Category.findAll({ 
        where: { id }, 
    });

    // Retorna um objeto contendo informações sobre o post, o autor e as categorias
    return {
        ...oneBlogPost.dataValues, // Usa spread operator para obter os valores do post
        user, // Adiciona as informações do autor
        categories, // Adiciona as informações das categorias
    };
};

// Atualiza um post específico com base no ID
const updateOneBlogPost = async (id, { title, content }, userId) => {
    const blogPost = await BlogPost.findOne({ where: { id } });

    // Se não houver um post com o ID fornecido, lança um erro
    if (!blogPost) {
        throw new ErrorLaunch('Post does not exist', 404);
    }
    // Verifica se o usuário é o autor do post
    if (blogPost.id !== userId) {
        throw new ErrorLaunch('Unauthorized user', 401);
    }
    // Atualiza o título, o conteúdo e a data de atualização do post
    await BlogPost.update({ title, content, updated: new Date() }, { where: { id } });

    // Busca as informações atualizadas do post
    const postUpdated = await findOneBlogPost(id);

    // Retorna as informações atualizadas do post
    return postUpdated;
};

module.exports = { addNewPostAndBing, findAllBlogPosts, findOneBlogPost, updateOneBlogPost };