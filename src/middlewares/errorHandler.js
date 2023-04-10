// se existir error.status retorna um erro com status 500 com a mensagem do erro, se não
// retorna apenas um erro genérico
module.exports = (error, _req, res, _next) => {
    if (error.status) return res.status(error.status).json({ message: error.message });
    return res.status(500).json({ message: 'internal server error' });
  };