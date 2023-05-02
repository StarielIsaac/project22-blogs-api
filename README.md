# Bem vindo ao API de Blogs!

Este projeto foi desenvolvido durante o meu aprendizado no curso de Desenvolvimento Web na <a href="https://www.betrybe.com/">Trybe</a> e é divulgado publicamente como parte do meu portfólio.

---

## Desenvolvimento

Neste projeto, foi construído um back-end usando ORM com o pacote sequelize. Foi desenvolvida uma API para gerenciamento de posts de blog com operações de CRUD (Create, Read, Update e Delete). 

Inicialmente, foi criada uma tabela para usuários que desejam se cadastrar na aplicação. Em seguida, foi criada uma tabela de categorias para classificar os posts, e, por fim, a tabela de posts que armazena todas as informações dos posts realizados na plataforma.

Foi desenvolvida uma aplicação em Node.js usando o pacote sequelize para realizar as operações de CRUD.

Foi possível:

 - Criar e associar tabelas usando models do sequelize.
 - Construir endpoints para consumir os models criados.
 - Realizar operações de CRUD com o ORM.
  

## Exexutando o projeto na sua maquina

Para executar o projeto localmente, entre no terminal, crie um diretório em qualquer local de sua preferência usando o comando **mkdir project-blog-posts** e acesse-o com o comando cd:

```bash
cd project-blog-posts
```

1. Clone o projeto com o comando `git clone`:

```bash
git clone git@github.com:StarielIsaac/project22-blogs-api.git
```

2. Acesse o diretório do projeto com o comando `cd`:

```bash
cd project22-blogs-api
```

3. Instale as dependencias do projeto com o comando `npm install`:

```bash
npm install
```

4.  Abra o terminal, execute o projeto com o comando `npm run dev` (para utilizar a biblioteca _nodemon_) :

```bash
npm start
```

---

## Observações importantes 👀:

**É necessário configurar as variáveis globais do MySQL.**

**Faça essas configurações também para as variáveis de ambiente usadas nesses arquivo:**
`project-blog-posts/config/config.js`

```js
module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
};
```

**(Neste arquivo, o nome do database deve ser  `"database": 'blogs_api'`)**

### Variáveis:

**É essencial usar as seguintes variáveis no arquivo abaixo:**

Com elas, vamos nos conectar ao banco de dados do avaliador.

`host: process.env.HOSTNAME`

`user: process.env.MYSQL_USER`

`password: process.env.MYSQL_PASSWORD`

### Variável JWT (opcional):

**Se desejar você pode criar sua variável de ambiente para o SECRET do JWT, no arquivo config.js (opcional).**

```js
JWT_SECRET=suaSenhaSecreta
```

---

### Dicas

  **OBSERVAÇÂO: Os testes irão rodar atráves do seu migrate usando os seguintes comandos:**

  "drop": "npx sequelize-cli db:drop $" -- Dropa o banco

  "prestart": "npx sequelize-cli db:create && npx sequelize-cli db:migrate $" -- Cria o banco e gera as tabelas

  "seed": "npx sequelize-cli db:seed:all $", -- Insere dados na tabela
  
  
  **Haverá um arquivo na pasta `/seeders` que terá as querys para inserir dados no datebase `(não remover)`.**
  
 
  (**_qualquer duvida sobre qual comando rodar consulte o arquivo '.package.json'_**)


---

<p align="center">
  <b>Projeto desenvolvido por Stariel Isaac...</b>
</p>


  
