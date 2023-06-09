require('express-async-errors');
const express = require('express');

const errorHandler = require('./middlewares/errorHandler');
const loginRouter = require('./routers/loginRouter');
const userRouter = require('./routers/userRouter');
const categoryRouter = require('./routers/categoryRouter');
const postRouter = require('./routers/postRouter');
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
// rota para o endpoint "/user"
app.use('/user', userRouter);
// rota para o endpoint "/categories"
app.use('/categories', categoryRouter);
// rota para o endpoint "/post" 
app.use('/post', postRouter);

// middleware de erro ( caso falha da request )
app.use(errorHandler);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
