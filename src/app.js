require('express-async-errors');
const express = require('express');

const errorHandler = require('./middlewares/errorHandler');
const loginRouter = require('./routers/loginRouter');
// ...

// inicia o express
const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

// deve converter a 'response' no formato .json
app.use(express.json());

// rota para o endpoint "/login"
app.use('/login', loginRouter); 

// middleware de erro genérico ( caso falha da request )
app.use(errorHandler);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
