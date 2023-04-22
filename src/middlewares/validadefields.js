const errorMensage = require('../utils/errorMensage');

const validadePost = async (req, res, next) => {
  const { title, content } = req.body;

  if (!title || title.legth < 1) {
    throw errorMensage(400, 'Some required fields are missing');
  }
  if (!content || content.legth < 1) {
    throw errorMensage(400, 'Some required fields are missing');
  }

  next();
};

module.exports = validadePost;