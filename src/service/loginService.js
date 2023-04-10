const { User } = require('../models/User');
const errorMensage = require('../middlewares/errorHandler');
const { createToken } = require('../utils/auth');

// funcao que verifica se o token existe, se sim cria um token e retorna-o
const findUser = async (email, password) => {
    const user = await User.findOne({ where: { email, password } });
    // console.log(user);

    if (!user) {    
       throw errorMensage(400, 'Invalid fields');
    }

    const token = createToken({ id: user.id });
    // console.log(token);
    return { token };
  };
  
  module.exports = { findUser };