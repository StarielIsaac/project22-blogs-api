const app = require('./app');

// não remova a variável `API_PORT` ou o `listen`
// Define a porta que o servidor deve ouvir
const port = process.env.API_PORT || 3001;

// Inicia o servidor e escuta a porta definida
app.listen(port, () => console.log('ouvindo porta', port));
