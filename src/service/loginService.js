const { User } = require('../models');
const { createToken } = require('../utils/auth');
const ErrorLaunch = require('../utils/errorHandle');

// funcao que verifica se o token existe, se sim cria um token e retorna-o
const findUser = async (email, password) => {
    // busca o usuario no bando de dados
    const user = await User.findOne({ where: { email, password } });

    // se o usuario não existir
    if (!user) {
        throw new ErrorLaunch('Invalid fields', 400);
    }

    // cria um token usando jwt e retorna esse token para o usuario
    const token = createToken({ id: user.id });
    // console.log(token);
    return { token };
  };
  
  module.exports = { findUser };