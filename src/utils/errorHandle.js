class ErrorLaunch extends Error {
    constructor(message, code) {
      super(message); // chama o construtor da classe pai, Error
      this.code = code; // atribui o código de erro à instância criada
    }
  }
  
  module.exports = ErrorLaunch;