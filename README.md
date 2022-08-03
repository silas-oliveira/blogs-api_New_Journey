# Boas-vindas ao repositório do projeto API de Blogs!

<br />

 ### <strong>👨‍💻 O que foi desenvolvido</strong>

  Neste projeto, foi desenvolvida uma API e um banco de dados para a produção de conteúdo para um blog!

  Uma aplicação em `Node.js` usando o pacote `sequelize` para fazer um `CRUD` de posts.

  1. Endpoints conectados ao seu banco de dados seguindo os princípios do REST;

  2. Relacionamento entre tabelas, usando os princípios do Sequelize.

<br />

 ### <strong>👀 Como verificar o código da aplicação 👀</strong>

  Basta apertar o botão '.' do seu teclado, e você terá acesso completo ao código do projeto.

<br />


# Endpoints da API

### - POST `/login`

- Endpoint acessível através do URL `/login`;
O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "email": "lewishamilton@gmail.com",
    "password": "123456"
  }
  ```

<details>
  <summary><strong>Os seguintes estão sendo validados:</strong></summary>

  * **[Validado que não é possível fazer login sem todos os campos preenchidos]**
    - Se a requisição não tiver todos os campos devidamente preenchidos(não pode haver campos em branco), o resultado retornado deverá ser conforme exibido abaixo, com um status http `400`:
    ```json
    {
      "message": "Some required fields are missing"
    }
    ```

  * **[Validado que não é possível fazer login com um usuário que não existe]**
    - Se a requisição receber um par de `email` e `password` errados/inexistentes, o resultado retornado deverá ser conforme exibido abaixo, com um status http `400`:
    ```json
    {
      "message": "Invalid fields"
    }
    ```
  
  * **[Validado que é possível fazer login com sucesso]**
    - Se o login foi feito com sucesso o resultado retornado ocorre conforme o modelo exibido abaixo, com um status http `200`:
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
    }
    ```
    > :warning: O token anterior é fictício, seu token deve ser gerado a partir da variável de ambiente `JWT_SECRET`, do `payload` da requisição e não deve conter o atributo `password` em sua construção.

<br />
</details>

---
### - POST `/user`

- Endpoint acessível através do URL `/user`;
- Endpoint adiciona um novo `user` a tabela no banco de dados;
- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "displayName": "Brett Wiltshire",
    "email": "brett@email.com",
    "password": "123456",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
  }
  ```

<details>
  <summary><strong>Os seguintes pontos estão sendo validados</strong></summary>

  * **[Validado que não é possível cadastrar com o campo `displayName` menor que 8 caracteres]**
    - Se a requisição não tiver o campo `displayName` devidamente preenchido com 8 caracteres ou mais, o resultado retornado ocorre conforme modelo exibido abaixo, com um status http `400`:
    ```json
    {
      "message": "\"displayName\" length must be at least 8 characters long"
    }
    ```
  
  * **[Validado que não é possível cadastrar com o campo `email` com formato inválido]**
    - Se a requisição não tiver o campo `email` devidamente preenchido com o formato `<prefixo@dominio>`, o resultado retornado ocorre conforme modelo exibido abaixo, com um status http `400`:
    ```json
    {
      "message": "\"email\" must be a valid email"
    }
    ```

  * **[Validado que não é possível cadastrar com o campo `password` menor que 6 caracteres]**
    - Se a requisição não tiver o campo `password` devidamente preenchido com 6 caracteres ou mais, o resultado retornado ocorre conforme modelo exibido abaixo, com um status http `400`:
    ```json
    {
      "message": "\"password\" length must be at least 6 characters long"
    }
    ```

  * **[Validado que não é possível cadastrar com um email já existente]**
    - Se a requisição enviar o campo `email` com um email que já existe, o resultado retornado ocorre conforme exibido abaixo, com um status http `409`:
    ```json
    {
      "message": "User already registered"
    }
    ```
  
  * **[Validado que é possível cadastrar um pessoa usuária com sucesso]**
    - Se o user for criado com sucesso o resultado retornado ocorre conforme exibido abaixo, com um status http `201`:
    ```json
      {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
      }
      ```

<br />
</details>

---
### - GET `/user`

- Endpoint acessível através do URL `/user`;
- Endpoint traz todos os `users` do banco de dados;

<details>
  <summary><strong>Os seguintes pontos estão sendo validados</strong></summary>

  * ☝ **[Token sendo validado]**

  * **[Validado que é possível listar todos os usuários]**
    - Ao listar usuários com sucesso o resultado retornado ocorre conforme exibido abaixo, com um status http `200`:
    ```json
    [
      {
          "id": 1,
          "displayName": "Lewis Hamilton",
          "email": "lewishamilton@gmail.com",
          "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
      },

      /* ... */
    ]
    ```

<br />
</details>

---
### - GET `/user/:id`

- Endpoint acessível através do URL `/user/:id`;
- Endpoint traz o `user` baseado no `id` do banco de dados se ele existir;

<details>
  <summary><strong>Os seguintes pontos estão sendo validados</strong></summary>

  * ☝ **[Token sendo validado]**

  * **[Validado que é possível listar um usuário específico com sucesso]**
    - Ao listar um usuário com sucesso o resultado retornado ocorre conforme exibido abaixo, com um status http `200`:
    ```json
    {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
    }
    ```

  * **[Validado que não é possível listar um usuário inexistente]**
    - Se o usuário for inexistente o resultado retornado ocorre conforme exibido abaixo, com um status http `404`:
    ```json
    {
      "message": "User does not exist"
    }
    ```

<br />
</details>

---
### - POST `/categories`

- Endpoint acessível através do URL `/categories`;
- Endpoint adiciona uma nova categoria a sua tabela no banco de dados;
- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "name": "Typescript"
  }
  ```

<details>
  <summary><strong>Os seguintes pontos estão sendo validados</strong></summary>

  * ☝ **[Token sendo validado]**

  * **[Validado que não é possível cadastrar uma categoria sem o campo `name`]**
    - Se a requisição não tiver o campo `name` devidamente preenchidos(não pode haver campo em branco), o resultado retornado ocorre conforme exibido abaixo, com um status http `400`:
    ```json
    {
      "message": "\"name\" is required"
    }
    ```

  * **[Validado que é possível cadastrar uma categoria com sucesso]**
    - Se a categoria for criada com sucesso o resultado retornado ocorre conforme exibido abaixo, com um status http `201`:
    ```json
    {
      "id": 3,
      "name": "Typescript"
    }
    ```

<br />
</details>

---
### - GET `/categories`

- Endpoint acessível através do URL `/categories`;
- Endpoint traz todas categorias do banco de dados;

<details>
  <summary><strong>Os seguintes pontos estão sendo validados</strong></summary>

  * ☝ **[Token sendo validado]**

  * **[Validado que é possível listar todas as categoria com sucesso]**
    - Ao listar categorias com sucesso o resultado retornado ocorre conforme exibido abaixo, com um status http `200`:
    ```json
    [
      {
          "id": 1,
          "name": "Inovação"
      },
      {
          "id": 2,
          "name": "Escola"
      },

      /* ... */
    ]
    ```

<br />
</details>

---
### - POST `/post`

- Endpoint deve ser acessível através do URL `/post`;
- Endpoint adiciona um novo blog post e vincula as categorias em suas tabelas no banco de dados;
- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key",
    "categoryIds": [1, 2]
  }
  ```

---
### - GET `/post`

- Endpoint acessível através do URL `/post`;
- Endpoint traz todos os blogs posts, user dono dele e as categorias do banco de dados;

<details>
  <summary><strong>Os seguintes pontos estão sendo validados</strong></summary>

  * ☝ **[Token sendo validado]**

  * **[Validado que é possível listar blogpost com sucesso]**
    - Ao listar posts com sucesso o resultado retornado ocorre conforme exibido abaixo, com um status http `200`:
    ```json
    [
      {
        "id": 1,
        "title": "Post do Ano",
        "content": "Melhor post do ano",
        "userId": 1,
        "published": "2011-08-01T19:58:00.000Z",
        "updated": "2011-08-01T19:58:51.000Z",
        "user": {
          "id": 1,
          "displayName": "Lewis Hamilton",
          "email": "lewishamilton@gmail.com",
          "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
        },
        "categories": [
          {
            "id": 1,
            "name": "Inovação"
          }
        ]
      },
      
      /* ... */
    ]
    ```

<br>
</details>

  ---
### - GET `/post/:id`

- Endpoint acessível através do URL `/post/:id`;
- Endpoint traz o blog post baseado no `id` do banco de dados se ele existir;

<details>
  <summary><strong>Os seguintes pontos estão sendo validados</strong></summary>

  * ☝ **[Token sendo validado]**

  * **[Validado que é possível listar um blogpost com sucesso]**
    - Ao listar um post com sucesso o resultado retornado ocorre conforme exibido abaixo, com um status http `200`:
    ```json
    {
      "id": 1,
      "title": "Post do Ano",
      "content": "Melhor post do ano",
      "userId": 1,
      "published": "2011-08-01T19:58:00.000Z",
      "updated": "2011-08-01T19:58:51.000Z",
      "user": {
          "id": 1,
          "displayName": "Lewis Hamilton",
          "email": "lewishamilton@gmail.com",
          "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
      },
      "categories": [
          {
              "id": 1,
              "name": "Inovação"
          }
      ]
    }
    ```

  * **[Validado que não é possível listar um blogpost inexistente]**
    - Se o post for inexistente o resultado retornado ocorre conforme exibido abaixo, com um status http `404`:
    ```json
    {
      "message": "Post does not exist"
    }
    ```

<br />
</details>

---
### - PUT `/post/:id`

- Endpoint acessível através do URL `/post/:id`;
- Endpoint altera um post do banco de dados, se ele existir;
- Aplicação não permite a alteração das categorias do post, somente os atributos `title` e `content` podem ser alterados;
- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key"
  }
  ```
  

<details>
  <summary><strong>Os seguintes pontos estão sendo validados</strong></summary>

  * ☝ **[Token sendo validado]**

  * **[Validado que não é possível editar um blogpost com outro usuário]**
    - Somente o user que criou o blog post poderá editá-lo, o resultado retornado ocorre conforme exibido abaixo, com um status http `401`
    ```json
      {
        "message": "Unauthorized user"
      }
    ```

  * **[Validado que não é possível editar sem todos os campos preenchidos]**
    - Se a requisição não tiver todos os campos devidamente preenchidos(não pode haver campos em branco), o resultado retornado ocorre conforme exibido abaixo, com um status http `400`:
    ```json
    {
      "message": "Some required fields are missing"
    }
    ```

  * **[Validado que é possível editar um blogpost com sucesso]**
    - Se o blog post for alterado com sucesso o resultado retornado ocorre conforme exibido abaixo, com um status http `200`:
    ```json
    {
      "id": 3,
      "title": "Latest updates, August 1st",
      "content": "The whole text for the blog post goes here in this key",
      "userId": 1,
      "published": "2022-05-18T18:00:01.000Z",
      "updated": "2022-05-18T18:07:32.000Z",
      "user": {
        "id": 1,
        "displayName": "Lewis Hamilton",
        "email": "lewishamilton@gmail.com",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
      },
      "categories": [
        {
          "id": 1,
          "name": "Inovação"
        },
        {
          "id": 2,
          "name": "Escola"
        }
      ]
    }
    ```

<br />
</details>

  ---
### - DELETE `/post/:id`

- Endpoint acessível através do URL `/post/:id`;
- Endpoint deleta um blog post baseado no `id` do banco de dados se ele existir;

<details>
  <summary><strong>Os seguintes pontos estão sendo validados</strong></summary>

  * ☝ **[Token sendo validado]**

  * **[Validado que não é possível deletar um blogpost com outro usuário]**
    - Somente o user que criou o blog post poderá deletá-lo, o resultado retornado ocorre conforme exibido abaixo, com um status http `401`
    ```json
      {
        "message": "Unauthorized user"
      }
    ```

  * **[Validado que é possível deletar um blogpost com sucesso]**
    - Se o blog post for deletado com sucesso nenhuma resposta será retornada, apenas um status http `204`:

  * **[Validado que não é possível deletar um blogpost inexistente]**
    - Se o post for inexistente o resultado retornado ocorre conforme exibido abaixo, com um status http `404`:
    ```json
    {
      "message": "Post does not exist"
    }
    ```

<br />
</details>

  ---

### - DELETE `/user/me`

- Endpoint acessível através do URL `/user/me`;
- Endpoint deleta você do banco de dados, baseado no `id` que esta dentro do seu `token`;
- Aplicação utiliza as informalções com base no token de autenticação para realizar a deleção;

<details>
  <summary><strong>Os seguintes pontos estão sendo validados</strong></summary>

  * ☝ **[Token sendo validado]**

  * **[Validado que é possível excluir meu usuário com sucesso]**
    - Se o user for deletado com sucesso nenhuma resposta é retornada, apenas um status http `204`:

<br />
</details>

---
### - GET `/post/search?q=:searchTerm`

- Endpoint acessível através do URL `/post/search`;
- Endpoint deve ser capaz de trazer os blogs post baseados no `q` do banco de dados, se ele existir;
- Aplicação retorna um array de blogs post que contenham em seu título ou conteúdo o termo passado na URL;
- Aplicação retorna um array vázio caso nenhum blog post satisfaça a busca;
- O query params da requisição deverá seguir o formato abaixo:
  ```js
    http://localhost:PORT/post/search?q=vamos
  ```

<details>
  <summary><strong>Os seguintes estão sendo validados</strong></summary>

  * ☝ **[Token sendo validado]**

  * **[Validado que é possível buscar um blogpost pelo `title`]**
    - Se a buscar for pelo `title` o resultado retornado ocorre conforme exibido abaixo, com um status http `200`:
    ```json
    // GET /post/search?q=Vamos que vamos

    [
      {
        "id": 2,
        "title": "Vamos que vamos",
        "content": "Foguete não tem ré",
        "userId": 1,
        "published": "2011-08-01T19:58:00.000Z",
        "updated": "2011-08-01T19:58:51.000Z",
        "user": {
          "id": 1,
          "displayName": "Lewis Hamilton",
          "email": "lewishamilton@gmail.com",
          "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
        },
        "categories": [
          {
            "id": 2,
            "name": "Escola"
          }
        ]
      }
    ]
    ```

  * **[Validado que é possível buscar um blogpost pelo `content`]**
    - Se a buscar for pelo `content` o resultado retornado ocorre conforme exibido abaixo, com um status http `200`:
    ```json
      // GET /post/search?q=Foguete não tem ré

      [
        {
          "id": 2,
          "title": "Vamos que vamos",
          "content": "Foguete não tem ré",
          "userId": 1,
          "published": "2011-08-01T19:58:00.000Z",
          "updated": "2011-08-01T19:58:51.000Z",
          "user": {
            "id": 1,
            "displayName": "Lewis Hamilton",
            "email": "lewishamilton@gmail.com",
            "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
          },
          "categories": [
            {
              "id": 2,
              "name": "Escola"
            }
          ]
        }
      ]
    ```

  * **[Validado que é possível buscar todos os blogpost quando passa a busca vazia]**
    - Se a buscar for vazia o resultado retornado ocorre conforme exibido abaixo, com um status http `200`:
    ```json
      // GET /post/search?q=

      [
        {
          "id": 1,
          "title": "Post do Ano",
          "content": "Melhor post do ano",
          "userId": 1,
          "published": "2011-08-01T19:58:00.000Z",
          "updated": "2011-08-01T19:58:51.000Z",
          "user": {
            "id": 1,
            "displayName": "Lewis Hamilton",
            "email": "lewishamilton@gmail.com",
            "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
          },
          "categories": [
            {
              "id": 1,
              "name": "Inovação"
            }
          ]
        },
        
        /* ... */
      ]
    ```

  * **[Validado que é possível buscar um blogpost inexistente e retornar array vazio]**
    - Se a buscar um post inexistente o resultado retornado ocorre conforme exibido abaixo, com um status http `200`:
    ```json
      // GET /post/search?q=BATATA

      []
    ```

<br />
</details>

---

<br />
 
### - 🚧🚧 Testes unitários em desenvolvimento 🚧🚧
