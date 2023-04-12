const { BlogPost, PostCategory } = require('../models');

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

module.exports = { addNewPostAndBing };