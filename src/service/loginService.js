const { User } = require('../models/User');
const { createToken } = require('../utils/auth');
const ErrorLaunch = require('../utils/errorHandle');

// funcao que verifica se o token existe, se sim cria um token e retorna-o
const findUser = async (email, password) => {
    const user = await User.findOne({ where: { email, password } });
    // console.log(user);

    if (!user) {
        throw new ErrorLaunch('Invalid fields', 400);
    }

    const token = createToken({ id: user.id });
    // console.log(token);
    return { token };
  };
  
  module.exports = { findUser };