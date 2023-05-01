# Boas vindas ao repositório do API de Blogs!

Projeto desenvolvido por mim durante o curso de Desenvolvimento Web na <a href="https://www.betrybe.com/">Trybe</a> para fins educacionais e divulgado publicamente como portfólio de aprendizado. 

---

## Desenvolvimento

Nesse projeto, eu construi um back-end usando `ORM` com o pacote `sequelize` do `npm`. Eu arquiteturei e desenvolvi uma API de um CRUD posts de blog (com o Sequelize). Começando pela API, eu desenvolvi alguns endpoints (seguindo os princípios do REST) que estão conectados ao meu banco de dados.

Primeiro, você criei uma tabela para os usuários que desejam se cadastrar na aplicação. Após isso, criei também uma tabela de Categorias para seus Posts e por fim a tabela de Posts foi seu foco, guardando todas as informações dos posts realizados na plataforma. 

Eu desenvolvi uma aplicação em `Node.js` usando o pacote `sequelize` para fazer um `CRUD` de posts.

Eu fui capaz de:

 - Criar e associar tabelas usando `models` do `sequelize`
 - Construir endpoints para consumir os models que criar 
 - Fazer um `CRUD` com o `ORM`


## Rodando o projeto localmente

Para rodar o projeto em sua máquina, abra seu terminal, crie um diretório no local de sua preferência com o comando `mkdir` e acesse o diretório criado com o comando `cd`:

```bash
mkdir meu-diretorio
cd meu-diretorio
```

Clone o projeto com o comando `git clone`:

```bash
git clone git@github.com:apaulinhacarlos/project29-blogs-api.git
```

Acesse o diretório do projeto com o comando `cd`:

```bash
cd project29-blogs-api
```

Instale as dependencias do projeto com o comando `npm install`:

```bash
npm install
```

Execute o projeto com os comandos `npm start` ou `npm run dev` (caso queira utilizar a lib nodemon) :

```bash
npm start
```

---

## Requisitos

### 👀 Observações importantes:

**Você irá precisar configurar as variáveis globais do MySQL.** Você pode usar esse [Conteúdo de variáveis de ambiente com NodeJS](https://blog.rocketseat.com.br/variaveis-ambiente-nodejs/) como referência.

**Faça essas configurações também para as variáveis de ambiente usadas nesses arquivo:**

`sd-012-project-blogs-api/config/config.js`

```
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

**(Neste arquivo e obrigatório deixar o nome do database como `"database": 'blogs_api'`)**

**É essencial usar essas 3 variávies no arquivo acima:**

#### Variáveis:

`host: process.env.HOSTNAME`

`user: process.env.MYSQL_USER`

`password: process.env.MYSQL_PASSWORD`

**Com elas que iremos conseguir conectar ao banco do avaliador automático**

#### Variável JWT (opcional):

`JWT_SECRET`

**Também poderá ser utilizada esta variável de ambiente para o SECRET do JWT**

### Dicas

#### Status HTTP

Tenha em mente que todas as "respostas" devem respeitar os [status do protocolo HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status) com base no que o REST prega.

Alguns exemplos:

  - Requisições que precisam de token mas não o receberam devem retornar um código de `status 401`;

  - Requisições que não seguem o formato pedido pelo servidor devem retornar um código de `status 400`;

  - Um problema inesperado no servidor deve retornar um código de `status 500`;

  - Um acesso ao criar um recurso, no nosso caso usuário ou post, deve retornar um código de `status 201`.

---

#### Os seguintes pontos serão avaliados:

- O seu projeto deverá usar um `ORM` para criar e atualizar o seu banco. A clonagem do projeto seguida de um comando de migrate deve deixá-lo em sua forma esperada.

- Deve conter uma tabela chamada **Users**, contendo dados com a seguinte estrutura::

  ```json
  {
    "id": 1,
    "displayName": "Brett Wiltshire",
    "email": "brett@email.com", // tem quer ser único
    "password": "123456",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
  }
  ```
- Deve conter uma tabela chamada **Categories**, contendo dados com a seguinte estrutura::

  ```json
  {
    "id": 18,
    "name": "News"
  }
  ```

- Deve conter uma tabela chamada **PostsCategories**, contendo dados com a seguinte estrutura:

  ```json
  {
    "postId": 50,
    "categoryId": 20
  }
  ```

- Deve conter uma tabela chamada **BlogPosts**, contendo dados com a seguinte estrutura::

  ```json
  {
    "id": 21,
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key",
    "userId": 14, // esse é o id que referência usuário que é o autor do post
    "published": "2011-08-01T19:58:00.000Z",
    "updated": "2011-08-01T19:58:51.947Z",
  }
  ```
  
  **Os dados acima são fictícios, e estão aqui apenas como exemplo**  

  **OBS: Os testes irão rodar atráves do seu migrate usando os seguintes comandos:**

  "drop": "npx sequelize-cli db:drop $" -- Dropa o banco

  "prestart": "npx sequelize-cli db:create && npx sequelize-cli db:migrate $" -- Cria o banco e gera as tabelas

  "seed": "npx sequelize-cli db:seed:all $", -- Insere dados na tabela

  **Então preste bastante atenção se estiver errado o avaliador não irá funcionar**

  **Haverá um arquivo na pasta `/seeders` dentro dela irá conter as querys para inserir no banco `não remova ela o avaliador irá usar ela`.**
  
