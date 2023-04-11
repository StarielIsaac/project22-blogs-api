// const ErrorLaunch = require('../utils/errorHandle');
const { User } = require('../models/User');
const { createToken } = require('../utils/auth');

const createUser = async (info) => {
// chama a model (sql)
  
// adiciona novo usuario no db
await User.create(info);

// cria um token
const token = createToken(info);

return { token };
};
  
  module.exports = { createUser };