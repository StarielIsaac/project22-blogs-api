// const ErrorLaunch = require('../utils/errorHandle');
const { User } = require('../models');
const ErrorLaunch = require('../utils/errorHandle');
const { createToken } = require('../utils/auth');

// chama a model (sql)
const createUser = async (info) => {
const { email } = info;
// verifica se o usuario existe
const userExist = await User.findOne({ where: { email } });
if (userExist) {
  // console.log('ja existe essa conta');
  throw new ErrorLaunch('User already registered', 409);
}
// adiciona novo usuario no db
const newUser = await User.create(info);

// cria um token
const token = createToken({ id: newUser.id });

return { token };
};
  
const listUsers = async () => {
  const results = await User.findAll({
    attributes: { exclude: ['password'] },
  });  

  return results;
};

const findOneUser = async (id) => {
  const findedUser = await User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });

  if (!findedUser) {
    // console.log('ja existe essa conta');
    throw new ErrorLaunch('User does not exist', 404);
  }

  return findedUser;
};

const deleteMyAccount = async (id) => {
   const findedUser = await User.findOne({ where: { id } });

  if (!findedUser) {
    throw new ErrorLaunch('User does not exist', 404);
  }

  await User.destroy({ where: { id } });
};

  module.exports = { 
    createUser,
    listUsers,
    findOneUser,
    deleteMyAccount,
   };