// const ErrorLaunch = require('../utils/errorHandle');
const { User } = require('../models');
const ErrorLaunch = require('../utils/errorHandle');
const { createToken } = require('../utils/auth');

// Função que cria um novo usuário no banco de dados
const createUser = async (info) => {
const { email } = info;

// Verifica se o usuário já existe no banco
const userExist = await User.findOne({ where: { email } });

// Se já existir lança um erro
if (userExist) {
  // console.log('ja existe essa conta');
  throw new ErrorLaunch('User already registered', 409);
}
// Adiciona um novo usuário no banco de dados
const newUser = await User.create(info);

// Cria um token para o novo usuário
const token = createToken({ id: newUser.id });

return { token };
};
// Função que lista todos os usuários do banco de dados
const listUsers = async () => {
  // Busca todos os usuarios, mas retira a informação 'password'
  const results = await User.findAll({
    attributes: { exclude: ['password'] },
  });  

  return results;
};
// Função que busca um usuário específico pelo seu ID
const findOneUser = async (id) => {
  const findedUser = await User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });

// Se esse usuário não existe lança um erro
  if (!findedUser) {
    throw new ErrorLaunch('User does not exist', 404);
  }

  return findedUser;
};
// Função que deleta a conta do usuário atualmente autenticado
const deleteMyAccount = async (id) => {
   const findedUser = await User.findOne({ where: { id } });
   console.log(findedUser);

// Verifica se o usuário existe antes de deletar a conta
  if (!findedUser) {
    throw new ErrorLaunch('User does not exist', 404);
  }
// Deleta a conta do usuário
   await User.destroy({ where: { id } });
};

  module.exports = { 
    createUser,
    listUsers,
    findOneUser,
    deleteMyAccount,
   };