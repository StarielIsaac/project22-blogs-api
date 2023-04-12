const errorMensage = require('../utils/errorMensage');
const { Category } = require('../models');

const validadePost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  const isArrayfilled = await Promise.all(categoryIds.map((id) => 
    Category.findOne({ where: { id } })));

  if (!title) {
    throw errorMensage(400, 'Some required fields are missing');
  }
  if (!content || categoryIds < 1) {
    throw errorMensage(400, 'Some required fields are missing');
  }
  if (isArrayfilled.includes(null)) {
    throw errorMensage(400, 'one or more "categoryIds" not found');
  }

  next();
};

module.exports = validadePost;